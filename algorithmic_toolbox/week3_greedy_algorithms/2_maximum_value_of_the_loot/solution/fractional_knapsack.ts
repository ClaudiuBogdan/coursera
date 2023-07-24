/**
 * Get the optimal value for a knapsack problem
 * @param {number} capacity The maximum weight the knapsack can hold
 * @param {number[]} weights An array of weights of items that can be placed in the knapsack
 * @param {number[]} values An array of values of items that can be placed in the knapsack
 * @returns {number} The optimal value for the knapsack problem
 * The optimal value is the maximum value that can be placed in the knapsack while staying under the maximum weight the knapsack can hold
 */

export const getOptimalValue = (
  capacity: number,
  weights: number[],
  values: number[]
): number => {
  let value = 0;
  let remainingCapacity = capacity;
  // Sort by value per weight to optimize the greedy algorithm
  const valuePerWeight = values
    .map((value, index) => {
      return {
        value: value / weights[index],
        // Get the index of the current element of the array.
        index: index + 1,
        // Get the weight of the current element of the array.
        weight: weights[index],
      };
    })
    .sort((a, b) => b.value - a.value);
  // Greedy algorithm
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
