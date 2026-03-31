const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'static', 'department', 'batch2026.png');
const dest = path.join(__dirname, 'static', 'batch2026.png');

try {
	if (fs.existsSync(src)) {
		fs.copyFileSync(src, dest);
		console.log('✓ Successfully copied batch2026.png to /static/');
		console.log(`Source: ${src}`);
		console.log(`Destination: ${dest}`);
	} else {
		console.log('✗ Source file not found:', src);
		console.log('Files in /static/department/:');
		fs.readdirSync(path.join(__dirname, 'static', 'department')).forEach((f) =>
			console.log('  -', f)
		);
	}
} catch (err) {
	console.error('Error:', err.message);
}
