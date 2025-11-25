const path = require("path");

console.log("Current file Info: ");
console.log("File name: ", __filename);
console.log("Directory: ", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/courses/nextLevel/outline/nextLevel.pdf";

console.log("Analyzing Path: ", filePath, "\n");
console.log("Directory name: ", path.dirname(filePath));
console.log("Base Name: ", path.basename(filePath));
console.log("File Extension: ", path.extname(filePath));
console.log("File Name: ", path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log("Parsed path object: ", parsed);

console.log("\n" + "-".repeat(50) + "\n");

console.log("Formated Path: ", path.format(parsed));
