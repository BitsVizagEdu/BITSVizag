const { execSync } = require('child_process');
const Tesseract = require('tesseract.js');
const path = require('path');
const fs = require('fs');

async function processAndCheck(num) {
	console.log(`Checking JAVA ${num}...`);
	try {
		const inputFile = path.resolve(`static/CSE-Certificates/JAVA/${num}.png`);
		if (!fs.existsSync(inputFile)) return;
		
		const tmpFile = path.resolve(`scratch_${num}.png`);
		
		// Use ImageMagick to threshold the image. We want the dark red text to become black on white.
		// -fuzz 20% -fill black -opaque "#800000" (approximate red)
		// actually just making the image grayscale and increasing contrast heavily might be enough.
		execSync(`magick "${inputFile}" -colorspace gray -contrast-stretch 5%x10% "${tmpFile}"`);
		
		const result = await Tesseract.recognize(tmpFile, 'eng');
		console.log(`--- ${num}.png Output ---`);
		console.log(result.data.text.substring(0, 500).replace(/\n/g, ' '));
		
		// Clean up
		fs.unlinkSync(tmpFile);
	} catch (err) {
		console.error(`Error with ${num}:`, err.message);
	}
}

async function run() {
	for(let i=61; i<=67; i++) {
		await processAndCheck(i);
	}
}
run();
