// @ts-nocheck
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.resolve('src/lib/server/data');
const DB_FILE = path.join(DATA_DIR, 'certificates.json');

// Ensure directory exists
if (!fs.existsSync(DATA_DIR)) {
	fs.mkdirSync(DATA_DIR, { recursive: true });
}

/**
 * Standardize roll number:
 * 1. Trim whitespace
 * 2. Convert to uppercase
 * 3. Remove spaces and non-alphanumeric chars
 */
export function normalizeRollNumber(input) {
	if (!input || typeof input !== 'string') return '';
	return input.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
}

/**
 * Map program input to normalized program name & slug
 */
export function normalizeProgram(program) {
	if (!program || typeof program !== 'string') return null;
	const p = program.trim().toLowerCase();
	if (p.includes('java')) {
		return {
			name: 'Java Full Stack Development',
			slug: 'java'
		};
	}
	if (p.includes('full') || p.includes('mern') || p.includes('stack')) {
		return {
			name: 'Full-Stack Development',
			slug: 'fullstack'
		};
	}
	return null;
}

/**
 * Read all certificates from storage
 */
export function getAllCertificates() {
	try {
		if (!fs.existsSync(DB_FILE)) {
			return [];
		}
		const raw = fs.readFileSync(DB_FILE, 'utf-8');
		return JSON.parse(raw);
	} catch (err) {
		console.error('[certificateDb] Error reading database:', err);
		return [];
	}
}

/**
 * Write certificates to storage atomically
 */
export function saveCertificates(certificates) {
	const tempFile = `${DB_FILE}.tmp.${Date.now()}`;
	try {
		fs.writeFileSync(tempFile, JSON.stringify(certificates, null, 2), 'utf-8');
		fs.renameSync(tempFile, DB_FILE);
		return true;
	} catch (err) {
		console.error('[certificateDb] Error saving database:', err);
		if (fs.existsSync(tempFile)) {
			try {
				fs.unlinkSync(tempFile);
			} catch (_) { }
		}
		throw err;
	}
}

/**
 * Find certificate by roll number and program.
 * Also supports flexible matching for character 'I' / digit '1' in Section numbers if typed by students.
 */
export function findCertificate(rollNumber, programInput) {
	const normalizedRoll = normalizeRollNumber(rollNumber);
	if (!normalizedRoll) return null;

	const programInfo = normalizeProgram(programInput);
	if (!programInfo) return null;

	const all = getAllCertificates();

	// 1. Direct exact match by normalized roll and program slug
	let match = all.find(
		(c) =>
			c.certificateStatus === 'active' &&
			c.programSlug === programInfo.slug &&
			normalizeRollNumber(c.rollNumber) === normalizedRoll
	);

	if (match) return match;

	// 2. Tolerance for I vs 1, O vs 0 substitution in JNTU roll numbers
	// Example: 23NR1A0516 vs 23NR1A05I6 or 23NR1A0501 vs 23NR1A05O1
	const flexibleRoll = normalizedRoll
		.replace(/I/g, '1')
		.replace(/O/g, '0');

	match = all.find((c) => {
		if (c.certificateStatus !== 'active' || c.programSlug !== programInfo.slug) return false;
		const candidateFlex = normalizeRollNumber(c.rollNumber)
			.replace(/I/g, '1')
			.replace(/O/g, '0');
		return candidateFlex === flexibleRoll;
	});

	return match || null;
}

/**
 * Insert or update a single certificate record
 */
export function upsertCertificate(record) {
	const normalizedRoll = normalizeRollNumber(record.rollNumber);
	if (!normalizedRoll) throw new Error('Valid roll number is required');

	const programInfo = normalizeProgram(record.program || record.programSlug);
	if (!programInfo) throw new Error('Valid program is required');

	const all = getAllCertificates();
	const existingIndex = all.findIndex(
		(c) =>
			c.programSlug === programInfo.slug &&
			normalizeRollNumber(c.rollNumber) === normalizedRoll
	);

	const now = new Date().toISOString();
	const newRecord = {
		id: record.id || `CERT-${programInfo.slug.toUpperCase()}-${normalizedRoll}`,
		studentName: record.studentName.trim().toUpperCase(),
		rollNumber: normalizedRoll,
		program: programInfo.name,
		programSlug: programInfo.slug,
		certificateFilePath: record.certificateFilePath,
		certificateId: record.certificateId || `TSS/${programInfo.slug.toUpperCase()}/2026/${normalizedRoll.slice(-3)}`,
		certificateStatus: record.certificateStatus || 'active',
		createdAt: existingIndex >= 0 ? all[existingIndex].createdAt : now,
		updatedAt: now
	};

	if (existingIndex >= 0) {
		all[existingIndex] = { ...all[existingIndex], ...newRecord };
	} else {
		all.push(newRecord);
	}

	saveCertificates(all);
	return newRecord;
}

/**
 * Bulk import certificate records
 */
export function bulkImportCertificates(records) {
	let inserted = 0;
	let updated = 0;

	for (const rec of records) {
		const normalizedRoll = normalizeRollNumber(rec.rollNumber);
		if (!normalizedRoll) continue;

		const programInfo = normalizeProgram(rec.program || rec.programSlug);
		if (!programInfo) continue;

		upsertCertificate(rec);
		inserted++;
	}

	return { success: true, count: inserted };
}
