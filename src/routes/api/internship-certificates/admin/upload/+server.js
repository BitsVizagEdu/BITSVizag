// @ts-nocheck
import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { upsertCertificate, normalizeRollNumber, normalizeProgram } from '$lib/server/certificateDb.js';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	// Authentication: Optional admin secret check if ADMIN_SECRET is set
	const adminKey = request.headers.get('x-admin-key');
	const requiredKey = env.ADMIN_KEY || env.API_SECRET || 'bits-admin-secret';

	if (adminKey && adminKey !== requiredKey) {
		return json({ success: false, message: 'Unauthorized admin key' }, { status: 401 });
	}

	try {
		const formData = await request.formData();
		const file = formData.get('file');
		const studentName = formData.get('studentName');
		const rollNumber = formData.get('rollNumber');
		const program = formData.get('program');
		const certificateId = formData.get('certificateId');

		if (!studentName || !rollNumber || !program) {
			return json(
				{ success: false, message: 'studentName, rollNumber, and program are required.' },
				{ status: 400 }
			);
		}

		const normRoll = normalizeRollNumber(rollNumber.toString());
		const progInfo = normalizeProgram(program.toString());

		if (!normRoll || !progInfo) {
			return json(
				{ success: false, message: 'Invalid roll number or program specified.' },
				{ status: 400 }
			);
		}

		let relFilePath = '';

		// If a file was uploaded in this request:
		if (file && typeof file === 'object' && file.name) {
			const subDir = progInfo.slug === 'java' ? 'JAVA' : 'MERN';
			const targetDir = path.resolve('static/CSE-Certificates', subDir);
			if (!fs.existsSync(targetDir)) {
				fs.mkdirSync(targetDir, { recursive: true });
			}

			// Clean filename using roll number to avoid collisions
			const ext = path.extname(file.name) || '.png';
			const safeFileName = `${normRoll}${ext}`;
			const destPath = path.join(targetDir, safeFileName);

			const buffer = Buffer.from(await file.arrayBuffer());
			fs.writeFileSync(destPath, buffer);

			relFilePath = `CSE-Certificates/${subDir}/${safeFileName}`;
		} else {
			// If file was already placed in static, form can supply certificateFilePath
			const existingPath = formData.get('certificateFilePath');
			if (!existingPath) {
				return json(
					{ success: false, message: 'Certificate file must be provided.' },
					{ status: 400 }
				);
			}
			relFilePath = existingPath.toString();
		}

		const record = upsertCertificate({
			studentName: studentName.toString(),
			rollNumber: normRoll,
			program: progInfo.name,
			programSlug: progInfo.slug,
			certificateFilePath: relFilePath,
			certificateId: certificateId ? certificateId.toString() : undefined,
			certificateStatus: 'active'
		});

		return json({
			success: true,
			message: 'Certificate uploaded and recorded successfully.',
			record
		});
	} catch (err) {
		console.error('[Admin Upload Error]:', err);
		return json(
			{ success: false, message: 'Failed to process certificate upload: ' + err.message },
			{ status: 500 }
		);
	}
}
