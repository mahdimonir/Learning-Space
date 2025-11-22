const fs = require("fs");

console.log("Start reading...");

fs.readFile("./data/diary.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error happend: ", err.message);
  }
  console.log("File content: ");
  console.log(data);
});

console.log("This runs immediately - no blocking");
