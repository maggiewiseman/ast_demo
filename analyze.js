var fs = require("fs");
var esprima = require("esprima");
var estraverse = require("estraverse");
var util = require("util");
var escodegen = require("escodegen");

var declaredVariables = [];

function analyzeCode(code) {
    var ast = esprima.parse(code);
    traverse(ast);
    turnItBackIntoCode(ast);
}

function traverse(ast) {
    estraverse.traverse(ast, {
        enter: function(node) {
            if (node.type == "Identifier") {
                node.name = node.name + "_exploreLearning";
            }
        }
    });
    console.log(util.inspect(ast, false, null, true));
}

function turnItBackIntoCode(ast) {
    var code = escodegen.generate(ast);
    console.log(util.inspect(code, false, null, true));
}

/* -------------------------------------------------------------------------------------------- */
// var fs = require("fs");
// var esprima = require("esprima");
// var estraverse = require("estraverse");

// function analyzeCode(code) {
//     var ast = esprima.parse(code);
//     estraverse.traverse(ast, {
//         enter: function(node) {
//             //FIRST PART
//             console.log("Entered node", node.type);

//             // SECOND PART
//             //if (node.type === "AssignmentExpression") {
//             //     console.log("Encountered assignment to", node.left.name);
//             // }
//         }
//     });
// }

// // 2
// if (process.argv.length < 3) {
//     console.log("Usage: analyze.js file.js");
//     process.exit(1);
// }

// // 3
// var filename = process.argv[2];
// console.log("Reading " + filename);
// var code = fs.readFileSync(filename, "utf-8");

// analyzeCode(code);
// console.log("Done");
/* ----------------------------------------------------------------------------- */
// var fs = require("fs");
// var esprima = require("esprima");

// function analyzeCode(code) {

// }

// // 2
// if (process.argv.length < 3) {
//     console.log("Usage: analyze.js file.js");
//     process.exit(1);
// }

// // 3
// var filename = process.argv[2];
// console.log("Reading " + filename);
// var code = fs.readFileSync(filename, "utf-8");

// analyzeCode(code);
// console.log("Done");
/* ----------------------------------------------------- */

// var fs = require("fs");
// var esprima = require("esprima");

// function analyzeCode(code) {
//     var ast = esprima.parse(code);
//     console.log(ast);
// }

// // 2
// if (process.argv.length < 3) {
//     console.log("Usage: analyze.js file.js");
//     process.exit(1);
// }

// // 3
var filename = process.argv[2];
console.log("Reading " + filename);
var code = fs.readFileSync(filename, "utf-8");

analyzeCode(code);
console.log("Done");

// function analyze(code) {
//     var ast = esprima.parse(code);
//     console.log(ast);
// }
