// @ts-nocheck
import fs from 'fs';
import path from 'path';
import { findCertificate, normalizeRollNumber, normalizeProgram } from '$lib/server/certificateDb.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const rollNumberRaw = url.searchParams.get('rollNumber');
	const programRaw = url.searchParams.get('program');

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
		return new Response('Certificate not found', { status: 404 });
	}

	// 2. Resolve verified physical file path securely
	const staticDir = path.resolve('static');
	const safeFilePath = path.normalize(record.certificateFilePath).replace(/^(\.\.[\/\\])+/, '');
	const fullPath = path.join(staticDir, safeFilePath);

	if (!fullPath.startsWith(staticDir)) {
		return new Response('Access denied', { status: 403 });
	}

	if (!fs.existsSync(fullPath)) {
		return new Response('Certificate image file missing on server', { status: 404 });
	}

	const fileBuffer = fs.readFileSync(fullPath);

	return new Response(fileBuffer, {
		status: 200,
		headers: {
			'Content-Type': 'image/png',
			'Content-Length': fileBuffer.length.toString(),
			'Content-Disposition': 'inline',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
