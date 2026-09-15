// @ts-nocheck
import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import { findCertificate, normalizeRollNumber, normalizeProgram, upsertCertificate } from '$lib/server/certificateDb.js';

// Cache generated PDF buffers in memory to ensure instant repeated downloads
const pdfCache = new Map();

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, fetch }) {
	const rollNumberRaw = url.searchParams.get('rollNumber');
	const programRaw = url.searchParams.get('program');
	const format = url.searchParams.get('format') || 'pdf'; // default to genuine PDF

	if (!rollNumberRaw || !programRaw) {
		return new Response('Missing rollNumber or program query parameters', { status: 400 });
	}

	const normalizedRoll = normalizeRollNumber(rollNumberRaw);
	const programInfo = normalizeProgram(programRaw);

	if (!normalizedRoll || !programInfo) {
		return new Response('Invalid rollNumber or program parameters', { status: 400 });
	}

	// 1. Authoritative verification against the database
	const record = findCertificate(normalizedRoll, programInfo.slug);
	if (!record) {
		return new Response('Certificate record not found for the provided roll number and program', {
			status: 404
		});
	}

	// 1.5 Enforce 3 downloads limit per user
	const currentDownloads = record.downloadCount || 0;
	if (currentDownloads >= 3) {
		return new Response('Download limit exceeded. You can only download your certificate a maximum of 3 times.', {
			status: 403
		});
	}

	// Increment the counter for this download attempt
	record.downloadCount = currentDownloads + 1;
	try {
		upsertCertificate(record);
	} catch (e) {
		console.warn('Failed to update download count:', e);
	}

	// 2. Resolve verified physical file path securely
	let safeFilePath = record.certificateFilePath;
	if (!safeFilePath.startsWith('/')) {
		safeFilePath = '/' + safeFilePath;
	}

	const assetResponse = await fetch(safeFilePath);
	if (!assetResponse.ok) {
		console.error(`[Download Error] Certificate file missing from static assets: ${safeFilePath}`);
		return new Response('Certificate image file not found on server', { status: 404 });
	}

	const arrayBuffer = await assetResponse.arrayBuffer();
	const pngBytes = new Uint8Array(arrayBuffer);

	// Clean student name for filename: e.g. KOYYA_AKASH or PANATHALA_JYOTHI
	const cleanName = record.studentName.replace(/[^A-Za-z0-9]/g, '_').replace(/_+/g, '_');

	// If client explicitly requested raw PNG
	if (format.toLowerCase() === 'png') {
		const downloadFilename = `${cleanName}_Internship_Certificate.png`;
		return new Response(pngBytes, {
			status: 200,
			headers: {
				'Content-Type': 'image/png',
				'Content-Length': fileBuffer.length.toString(),
				'Content-Disposition': `attachment; filename="${downloadFilename}"`,
				'Cache-Control': 'private, no-cache, no-store, must-revalidate'
			}
		});
	}

	// 3. Generate genuine, high-quality standard PDF from the original certificate PNG
	try {
		const cacheKey = `${record.programSlug}_${record.rollNumber}`;
		let pdfBytes = pdfCache.get(cacheKey);

		if (!pdfBytes) {
			const pdfDoc = await PDFDocument.create();
			const pngImage = await pdfDoc.embedPng(pngBytes);

			// Standard A4 portrait in points: 595.28 x 841.89
			// The original certificate is 2828 x 4000 (aspect ratio 1 : 1.4144), exactly matching standard A4!
			const pageWidth = 595.28;
			const pageHeight = 841.89;

			const page = pdfDoc.addPage([pageWidth, pageHeight]);
			page.drawImage(pngImage, {
				x: 0,
				y: 0,
				width: pageWidth,
				height: pageHeight
			});

			// Standard PDF metadata
			pdfDoc.setTitle(`${record.studentName} - Internship Certificate`);
			pdfDoc.setAuthor('Baba Institute of Technology and Sciences (Autonomous)');
			pdfDoc.setSubject(`${record.program} Certificate of Completion`);
			pdfDoc.setCreator('BITS Vizag CDC Portal');
			pdfDoc.setProducer('BITS Vizag Certification Engine');

			pdfBytes = await pdfDoc.save();
			pdfCache.set(cacheKey, pdfBytes);
		}

		const downloadFilename = `${cleanName}_Internship_Certificate.pdf`;

		return new Response(pdfBytes, {
			status: 200,
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Length': pdfBytes.length.toString(),
				'Content-Disposition': `attachment; filename="${downloadFilename}"`,
				'Cache-Control': 'private, no-cache, no-store, must-revalidate'
			}
		});
	} catch (err) {
		console.error('[PDF Generation Error]:', err);
		return new Response('Failed to generate genuine PDF certificate: ' + err.message, {
			status: 500
		});
	}
}
