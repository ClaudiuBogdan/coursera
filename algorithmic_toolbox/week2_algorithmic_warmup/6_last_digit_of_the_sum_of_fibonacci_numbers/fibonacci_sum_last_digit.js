
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(fibIterationSum(parseInt(line, 10)));
  process.exit();
}

function fib(nInt, memo = []) {
  // write your code here
  const n = BigInt(nInt);
  if (n === 0n) return [0n, [0n]];
  if (n === 1n) return [1n, [0n, 1n]];

  const val1 = memoizeOrCompute(n - 1n, memo);
  const val2 = memoizeOrCompute(n - 2n, memo);

  const res = val1 + val2;
  return [res, memo];
}

function memoizeOrCompute(n, memo) {
  if (memo[n] !== undefined) {
    return memo[n];
  } else {
    const [val] = fib(n, memo);
    memo[n] = val;
    return val;
  }
}

function getFibMod(n) {
  // write your code here

  const [val, memo] = fib(n);
  const sum = memo.reduce((acc, prev) => acc + prev, 0n) + val;
  return Number(sum % 10n);
}

function fibIterationSum(n) {
  if (n <= 1) return n;

  let [prev, curr, sum] = [0n, 1n, 1n];

  for (let i = 0; i < n - 1; i++) {
    [prev, curr] = [curr, curr + prev];
    sum += curr;
  }

  return Number(sum % 10n)
}

module.exports = fibIterationSum;
