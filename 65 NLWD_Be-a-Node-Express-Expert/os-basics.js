const os = require("os");

console.log("System info");
console.log("\n", "-".repeat(50), "\n");

console.log("Platform Details: ");
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("OS type: ", os.type());
console.log("OS Relase: ", os.release());
console.log("Hostname: ", os.hostname());

console.log("\n", "-".repeat(50), "\n");

console.log("CPU info: ");
const cpus = os.cpus();
console.log("CPU Model: ", cpus[0].model);
console.log("Number of cores: ", cpus.length);
console.log("CPU Speed: ", cpus[0].speed);

console.log("\n", "-".repeat(50), "\n");

const totalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
console.log("Total Memory: ", totalMem, "GB");

const freeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
console.log("Free Memory: ", freeMem, "GB");

console.log("\n", "-".repeat(50), "\n");

const uptime = os.uptime();

const days = Math.floor(uptime / 86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);

console.log(`${days} days ${hours} hours ${minutes} minutes`);
