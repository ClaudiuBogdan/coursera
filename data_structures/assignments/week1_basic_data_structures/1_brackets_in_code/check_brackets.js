// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const openingBrackets = ["(", "[", "{"];
const isOpeningBracket = (bracket) => openingBrackets.includes(bracket);
const mapOpeningToClosingBracket = (bracket) =>
  ({
    "(": ")",
    "[": "]",
    "{": "}",
  }[bracket]);
const checkBrackets = (input) => {
  const stack = [];
  for (const bracket of input.split("")) {
    if (isOpeningBracket(bracket)) {
      stack.push(bracket);
    } else {
      const lastBracket = stack.pop();
      if (!lastBracket) {
        return false;
      }
      const closingBracket = mapOpeningToClosingBracket(lastBracket);
      if (closingBracket !== bracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

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
  return checkBrackets(line);
}

module.exports = solutionFn;
