// @ts-nocheck
import fs from 'fs';
import path from 'path';
import { bulkImportCertificates, normalizeRollNumber, normalizeProgram } from '../src/lib/server/certificateDb.js';

/**
 * CLI Tool to import certificates from a CSV or JSON file:
 * Usage: node scripts/importFromSpreadsheet.js <path-to-file.json|csv>
 */
const filePath = process.argv[2];

if (!filePath) {
	console.log('Usage: node scripts/importFromSpreadsheet.js <path-to-data-file.json|csv>');
	console.log('Example JSON format:');
	console.log(
		JSON.stringify(
			[
				{
					studentName: 'STUDENT NAME',
					rollNumber: '23NR1A0501',
					program: 'Full-Stack Development',
					certificateFilePath: 'CSE-Certificates/MERN/1.png',
					certificateId: 'TSS/MERN/2026/501'
				}
			],
			null,
			2
		)
	);
	process.exit(0);
}

if (!fs.existsSync(filePath)) {
	console.error(`Error: File not found: ${filePath}`);
	process.exit(1);
}

try {
	const content = fs.readFileSync(filePath, 'utf-8');
	let records = [];

	if (filePath.endsWith('.json')) {
		records = JSON.parse(content);
	} else if (filePath.endsWith('.csv')) {
		const lines = content.split(/\r?\n/).filter((l) => l.trim().length > 0);
		const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());

		for (let i = 1; i < lines.length; i++) {
			const cols = lines[i].split(',').map((c) => c.trim());
			const obj = {};
			headers.forEach((h, idx) => {
				obj[h] = cols[idx];
			});
			records.push({
				studentName: obj.name || obj.studentname || obj.certificate_name,
				rollNumber: obj.roll || obj.rollnumber || obj.roll_number,
				program: obj.program || obj.internship_program,
				certificateFilePath: obj.file || obj.certificate_file || obj.filepath,
				certificateId: obj.certid || obj.certificate_id
			});
		}
	}

	console.log(`Parsed ${records.length} records. Importing into database...`);
	const res = bulkImportCertificates(records);
	console.log(`Import completed successfully! Total imported: ${res.count}`);
} catch (e) {
	console.error('Import failed:', e);
	process.exit(1);
}
