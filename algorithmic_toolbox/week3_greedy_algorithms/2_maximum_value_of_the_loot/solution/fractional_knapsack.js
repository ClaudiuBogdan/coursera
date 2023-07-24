// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

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
export { getOptimalValue as getOptimalValue };
