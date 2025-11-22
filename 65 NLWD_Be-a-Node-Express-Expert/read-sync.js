const fs = require("fs");

console.log("Start reading...");

try {
  const data = fs.readFileSync("./data/diary.txt", "utf-8");
  console.log(data);
} catch (error) {
  console.error(error.message);
}
