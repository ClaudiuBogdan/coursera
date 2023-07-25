import { assertEquals } from "std/testing/asserts.ts";
import { describe, it } from "std/testing/bdd.ts";
import { getMaxActivities } from "./problem.ts";
describe("Activity selection problem", () => {
  it("should maximize the number of activities", () => {
    const activities: Array<[number, number]> = [
      [1, 4],
      [3, 5],
      [0, 6],
      [5, 7],
      [8, 9],
      [5, 9],
    ];
    const expected = [0, 3, 4];
    const solution = getMaxActivities(activities);
    assertEquals(solution, expected);
  });

  it('should return an empty array if provided with an empty array', ()=> {
    const activities: Array<[number, number]> = []
    const expected: number[] = []
    const solution = getMaxActivities(activities)
    assertEquals(solution, expected)
  })
});
