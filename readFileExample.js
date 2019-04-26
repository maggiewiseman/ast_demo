var fs = require("fs");

var filename = process.argv[2];

console.log("Reading " + filename);
var code = fs.readFileSync(filename, "utf-8");

console.log(code);
