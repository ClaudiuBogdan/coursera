import { describe, it } from "std/testing/bdd.ts";
import { assertEquals } from "std/testing/asserts.ts";
import { getOptimalValue } from "./fractional_knapsack.ts";

describe("Fractional knapsack", () => {
  it("should return 0", () => {
    assertEquals(getOptimalValue(0, [1], [1]), 0);
  });

  it("should return 180", () => {
    assertEquals(getOptimalValue(50, [20, 50, 30], [60, 100, 120]), 180);
  });

  it("should return 166.6667", () => {
    const expectedResult = 166.6667;
    const result = getOptimalValue(10, [30], [500]);
    const precision = 1e4;
    assertEquals(Math.round(result * precision) / precision, expectedResult);
  });
});
