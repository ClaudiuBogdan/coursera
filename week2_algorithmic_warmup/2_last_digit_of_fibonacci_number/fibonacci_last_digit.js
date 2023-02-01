// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(fibonacciLastDigit(parseInt(line, 10)));
  process.exit();
}

function fib(n, memo = new Map()) {
  // write your code here
  if (n <= 1) return BigInt(n);

  const val1 = memoizeOrCompute(n - 1, memo);
  const val2 = memoizeOrCompute(n - 2, memo);

  return val1 + val2;
}

function memoizeOrCompute(n, memo) {
  if (memo.has(n)) {
    return memo.get(n);
  } else {
    const val = fib(n, memo);
    memo.set(n, val);
    return val;
  }
}

function fibonacciLastDigit(n) {
  const val = fib(n);
  return Number(val % 10n);
}

module.exports = fibonacciLastDigit;
