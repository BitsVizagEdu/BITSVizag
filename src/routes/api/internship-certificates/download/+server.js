// @ts-nocheck
import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import { findCertificate, normalizeRollNumber, normalizeProgram } from '$lib/server/certificateDb.js';

// Cache generated PDF buffers in memory to ensure instant repeated downloads
const pdfCache = new Map();

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
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

	// 2. Resolve verified physical file path securely (prevent path traversal)
	const staticDir = path.resolve('static');
	const safeFilePath = path.normalize(record.certificateFilePath).replace(/^(\.\.[\/\\])+/, '');
	const fullPath = path.join(staticDir, safeFilePath);

	// Ensure path is strictly within staticDir
	if (!fullPath.startsWith(staticDir)) {
		return new Response('Access denied', { status: 403 });
	}

	if (!fs.existsSync(fullPath)) {
		console.error(`[Download Error] Certificate file missing on disk: ${fullPath}`);
		return new Response('Certificate image file not found on server', { status: 404 });
	}

	// Clean student name for filename: e.g. KOYYA_AKASH or PANATHALA_JYOTHI
	const cleanName = record.studentName.replace(/[^A-Za-z0-9]/g, '_').replace(/_+/g, '_');

	// If client explicitly requested raw PNG
	if (format.toLowerCase() === 'png') {
		const downloadFilename = `${cleanName}_Internship_Certificate.png`;
		const fileBuffer = fs.readFileSync(fullPath);
		return new Response(fileBuffer, {
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
			const pngBytes = fs.readFileSync(fullPath);
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
