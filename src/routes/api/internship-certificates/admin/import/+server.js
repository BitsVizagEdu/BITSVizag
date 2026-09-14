// @ts-nocheck
import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { bulkImportCertificates, normalizeRollNumber, normalizeProgram } from '$lib/server/certificateDb.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const body = await request.json();
		const records = Array.isArray(body) ? body : body.records;

		if (!records || !Array.isArray(records) || records.length === 0) {
			return json(
				{ success: false, message: 'Invalid payload. Expected an array of certificate records.' },
				{ status: 400 }
			);
		}

		const staticDir = path.resolve('static');
		const validRecords = [];
		const warnings = [];

		for (const [index, item] of records.entries()) {
			const normRoll = normalizeRollNumber(item.rollNumber || item.roll_number);
			const progInfo = normalizeProgram(item.program || item.programSlug || item.program_type);

			if (!normRoll) {
				warnings.push(`Row ${index + 1}: Missing or invalid rollNumber`);
				continue;
			}
			if (!progInfo) {
				warnings.push(`Row ${index + 1}: Missing or unrecognized program for roll ${normRoll}`);
				continue;
			}

			// Validate file path
			const relPath =
				item.certificateFilePath ||
				item.filePath ||
				`CSE-Certificates/${progInfo.slug === 'java' ? 'JAVA' : 'MERN'}/${item.certificate_file || item.file || normRoll + '.png'}`;

			const absPath = path.join(staticDir, relPath);
			if (!fs.existsSync(absPath)) {
				warnings.push(`Row ${index + 1} (${normRoll}): Certificate file does not exist at ${relPath}`);
			}

			validRecords.push({
				studentName: (item.studentName || item.certificate_name || item.name || '').trim().toUpperCase(),
				rollNumber: normRoll,
				program: progInfo.name,
				programSlug: progInfo.slug,
				certificateFilePath: relPath,
				certificateId: item.certificateId || item.certId || `TSS/${progInfo.slug.toUpperCase()}/2026/${normRoll.slice(-3)}`,
				certificateStatus: item.certificateStatus || 'active'
			});
		}

		const result = bulkImportCertificates(validRecords);

		return json({
			success: true,
			message: `Successfully processed and imported ${result.count} certificate records.`,
			totalProcessed: validRecords.length,
			warnings: warnings.length > 0 ? warnings : undefined
		});
	} catch (err) {
		console.error('[Admin Import Error]:', err);
		return json(
			{ success: false, message: 'Failed to bulk-import certificates: ' + err.message },
			{ status: 500 }
		);
	}
}
