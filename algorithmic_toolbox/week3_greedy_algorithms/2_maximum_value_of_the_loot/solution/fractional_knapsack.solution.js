// deno-fmt-ignore-file
// deno-lint-ignore-file

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
const weights = [];
const values = [];
let totalItems = -1;
let maxWeight = -1;

rl.on("line", (line) => {
  if (totalItems < 0) {
    [totalItems, maxWeight] = line.split(" ").map(Number);
    return;
  }

  const [value, weight] = line.split(" ").map(Number);
  values.push(value);
  weights.push(weight);

  if (values.length === totalItems) {
    const solution = getOptimalValue(maxWeight, weights, values);
    console.log(solution.toFixed(4));
    process.exit();
  }
});

const getOptimalValue = (capacity, weights, values) => {
  let value = 0;
  let remainingCapacity = capacity;
  const valuePerWeight = values
    .map((value, index) => {
      return {
        value: value / weights[index],
        weight: weights[index],
      };
    })
    .sort((a, b) => b.value - a.value);
  for (const item of valuePerWeight) {
    if (remainingCapacity === 0) {
      break;
    }
    const amount = Math.min(item.weight, remainingCapacity);
    value += amount * item.value;
    remainingCapacity -= amount;
  }
  return value;
};

module.exports = getOptimalValue;
