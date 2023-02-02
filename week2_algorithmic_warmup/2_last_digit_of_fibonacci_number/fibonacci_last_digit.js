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

function binet(n) {
  // pre-calculate sqrt(5) as we use it three times
  let sqrt5 = BigInt(Math.sqrt(5));

  return round((pow(1 + sqrt5, n) - pow(1 - sqrt5, n)) / (pow(2, n) * sqrt5));
}

function round(n) {
  return n;
}

function pow(n, m) {
  return n ** m;
}

function fibonacciLastDigit(n) {
  const val = binet(n);
  return Number(val % 10);
}

module.exports = fibonacciLastDigit;
