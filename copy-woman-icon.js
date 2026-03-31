const fs = require('fs');
const path = require('path');

const sourceFile =
	'C:/Users/rangu/AppData/Roaming/Code/User/globalStorage/github.copilot-chat/copilot-cli-images/1774092643985-6ae2a8ia.png';
const destFile = path.join(__dirname, 'static', 'woman-professional-icon.png');

try {
	if (fs.existsSync(sourceFile)) {
		fs.copyFileSync(sourceFile, destFile);
		console.log('✓ Successfully copied woman-professional-icon.png to /static/');
	} else {
		console.log('✗ Source file not found');
	}
} catch (err) {
	console.error('Error:', err.message);
}
