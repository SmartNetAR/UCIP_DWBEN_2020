const chalk = require("chalk");

const color = process.argv[2]
const name = process.argv[3];

console.log( chalk[color]( `Hello ${name}` ) );