// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const openingBrackets = [
    "(",
    "[",
    "{"
];
const closingBracket = [
    ")",
    "]",
    "}"
];
const brackets = [
    ...openingBrackets,
    ...closingBracket
];
const isBracket = (__char)=>brackets.includes(__char);
const isOpeningBracket = (bracket)=>openingBrackets.includes(bracket);
const mapOpeningToClosingBracket = (bracket)=>({
        "(": ")",
        "[": "]",
        "{": "}"
    })[bracket];
const checkBrackets = (input)=>{
    const stack = [];
    let position = 1;
    for(; position - 1 < input.length; position++){
        const __char = input[position - 1];
        if (!isBracket(__char)) {
            continue;
        }
        if (isOpeningBracket(__char)) {
            stack.push({
                bracket: __char,
                position
            });
            continue;
        }
        const lastBracket = stack.pop();
        if (!lastBracket) {
            return position;
        }
        const closingBracket = mapOpeningToClosingBracket(lastBracket.bracket);
        if (closingBracket !== __char) {
            return position;
        }
    }
    return stack.length === 0 ? -1 : stack[stack.length - 1].position;
};
const computeBracketSolution = (input)=>{
    const result = checkBrackets(input);
    return result === -1 ? "Success" : result;
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
  return computeBracketSolution(line);
}

module.exports = solutionFn;