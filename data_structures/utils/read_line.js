// deno-fmt-ignore-file
// deno-lint-ignore-file

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(solutionFn(line));
  process.exit();
}

function solutionFn(line) {
  // write your code here
  return line;
}

module.exports = solutionFn;
