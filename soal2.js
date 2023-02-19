const fs = require("fs");

const log = fs.readFileSync("./homework.log", "utf-8");
console.log(log);

fs.writeFileSync("write-log.txt", log, "utf-8");
console.log("Write Success");
