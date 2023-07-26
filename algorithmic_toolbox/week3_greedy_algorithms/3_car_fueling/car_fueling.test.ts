import { assertEquals } from "std/testing/asserts.ts";
import { it } from "std/testing/bdd.ts";
import { describe } from "std/testing/bdd.ts";
import { getTotalCarStops } from "./car_fueling.ts";
describe("Car fueling problem using greedy algorithm. Compute the minimum number of gas tank refills to get from one city to another.", () => {
  it("should return 2 for sample 1", () => {
    const totalDistance = 950;
    const tankCapacity = 400;
    const stops = [200, 375, 550, 750];
    const expectedStops = 2;
    const totalStops = getTotalCarStops(totalDistance, tankCapacity, stops);

    assertEquals(totalStops, expectedStops);
  });

  it("should return -1 for sample 2", () => {
    const totalDistance = 10;
    const tankCapacity = 3;
    const stops = [1, 2, 5, 9];
    const expectedStops = -1;
    const totalStops = getTotalCarStops(totalDistance, tankCapacity, stops);

    assertEquals(totalStops, expectedStops);
  });

  it("should return 0 for sample 3", () => {
    const totalDistance = 200;
    const tankCapacity = 250;
    const stops = [100, 150];
    const expectedStops = 0;
    const totalStops = getTotalCarStops(totalDistance, tankCapacity, stops);

    assertEquals(totalStops, expectedStops);
  });

  it("should return -1 if the first stop is to far away", () => {
    const totalDistance = 950;
    const tankCapacity = 100;
    const stops = [200, 375, 550, 750];
    const expectedStops = -1;
    const totalStops = getTotalCarStops(totalDistance, tankCapacity, stops);

    assertEquals(totalStops, expectedStops);
  });

  it("should return -1 if the second stop is to far away", () => {
    const totalDistance = 950;
    const tankCapacity = 200;
    const stops = [200, 401, 550, 750];
    const expectedStops = -1;
    const totalStops = getTotalCarStops(totalDistance, tankCapacity, stops);

    assertEquals(totalStops, expectedStops);
  });

  it("should return 2 when the stops at at the limit of the tank capacity", () => {
    const totalDistance = 600;
    const tankCapacity = 200;
    const stops = [200, 400];
    const expectedStops = 2;
    const totalStops = getTotalCarStops(totalDistance, tankCapacity, stops);

    assertEquals(totalStops, expectedStops);
  });

  it("should return 1 when it can't reach all the cities", () => {
    const totalDistance = 601;
    const tankCapacity = 200;
    const stops = [200, 400];
    const expectedStops = -1;
    const totalStops = getTotalCarStops(totalDistance, tankCapacity, stops);

    assertEquals(totalStops, expectedStops);
  });


});
