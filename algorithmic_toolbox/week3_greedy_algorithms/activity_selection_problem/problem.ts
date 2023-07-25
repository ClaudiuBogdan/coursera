export const getMaxActivities = (activities: Array<[number, number]>) => {
  // Use greedy algorithm to select the activity that has the lowest end time and does not overlap with the previous activities.
  // To avoid overlap, we need to keep track of the current time and make sure that the activity we select doesn't have a start time lowe than the current time.

  const solution: number[] = activities.length > 0 ? [0] : [];

  // We need to iterate until we check all the activities. We should sort the activities by the end time to optimize to computation.
  // To avoid overlapping, the next activity should have the start time equal or grater than the current time.

  // 1. Sort activities by end time.
  // 2. Get the first activity that has the start time equal or grater than the current time.
  // 3. Add the activity to the solution array.
  // 4. Stop when we reached the end of the array.
  // 5. Return the solution array

  for (let i = 0; i < activities.length; i++) {
    const lastActivityIndex = solution[solution.length - 1];
    const lastEndTime = activities[lastActivityIndex][1];
    if (activities[i][0] >= lastEndTime) {
      solution.push(i);
    }
  }
  return solution;
};
