const crypto = require("crypto");
const input = "password123";
console.log("\n MD5 Hash: ");
const md5Hash = crypto.createHash("md5").update(input).digest("hex");
console.log("input: ", input);
console.log("MD5 Hash Password: ", md5Hash);

const sha256Hash = crypto.createHash("sha256").update(input).digest("hex");
console.log("SHA256 Hash Password: ", sha256Hash);

const sha512Hash = crypto.createHash("sha512").update(input).digest("hex");
console.log("SHA512 Hash Password: ", sha512Hash);
