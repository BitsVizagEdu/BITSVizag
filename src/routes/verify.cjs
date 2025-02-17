const CryptoJS = require("crypto-js");
const fs = require("fs");

const secretKey = "R8vT#X@0Lp9o^2D!C&Y7M*1K3f$Bq6";
const scriptContent = fs.readFileSync("./+layout.svelte", "utf-8");

// Convert script content
const transformed = CryptoJS.AES.encrypt(scriptContent, secretKey).toString();
fs.writeFileSync("+layout.data", transformed);

console.log("✅ Layout file processed successfully!");