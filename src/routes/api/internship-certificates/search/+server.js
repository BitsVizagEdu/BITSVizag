// @ts-nocheck
import { json } from '@sveltejs/kit';
import { findCertificate, normalizeRollNumber, normalizeProgram } from '$lib/server/certificateDb.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const rollNumberRaw = url.searchParams.get('rollNumber');
	const programRaw = url.searchParams.get('program');

	// 1. Validation: Roll number
	if (!rollNumberRaw || !rollNumberRaw.trim()) {
		return json(
			{
				success: false,
				message: 'Please enter your roll number.'
			},
			{ status: 400 }
		);
	}

	// 2. Validation: Program
	if (!programRaw || !programRaw.trim()) {
		return json(
			{
				success: false,
				message: 'Please select an internship program.'
			},
			{ status: 400 }
		);
	}

	const normalizedRoll = normalizeRollNumber(rollNumberRaw);
	const programInfo = normalizeProgram(programRaw);

	if (!programInfo) {
		return json(
			{
				success: false,
				message: 'Invalid internship program specified.'
			},
			{ status: 400 }
		);
	}

	if (normalizedRoll.length < 5) {
		return json(
			{
				success: false,
				message: 'Please enter a valid BITS roll number (e.g. 23NR1A0589).'
			},
			{ status: 400 }
		);
	}

	// 3. Database search
	try {
		const record = findCertificate(normalizedRoll, programInfo.slug);

		if (!record) {
			return json(
				{
					success: false,
					message: `Certificate not found for roll number ${normalizedRoll} in ${programInfo.name}. Please check your roll number.`
				},
				{ status: 404 }
			);
		}

		// Success response
		const downloadUrl = `/api/internship-certificates/download?rollNumber=${encodeURIComponent(
			record.rollNumber
		)}&program=${encodeURIComponent(record.programSlug)}`;

		const previewUrl = `/api/internship-certificates/preview?rollNumber=${encodeURIComponent(
			record.rollNumber
		)}&program=${encodeURIComponent(record.programSlug)}`;

		return json({
			success: true,
			studentName: record.studentName,
			rollNumber: record.rollNumber,
			program: record.program,
			programSlug: record.programSlug,
			certificateId: record.certificateId,
			certificateUrl: downloadUrl,
			previewUrl: previewUrl
		});
	} catch (err) {
		console.error('[API search] Server error:', err);
		return json(
			{
				success: false,
				message: 'Internal server error while searching certificate. Please try again.'
			},
			{ status: 500 }
		);
	}
}
