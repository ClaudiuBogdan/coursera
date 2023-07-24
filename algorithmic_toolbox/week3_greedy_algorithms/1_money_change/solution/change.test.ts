import { describe, it } from "std/testing/bdd.ts";
import { assertEquals } from "std/testing/asserts.ts";
import { getChange } from "./change.ts";

describe("Money change", () => {
  it("should return 2", () => {
    assertEquals(getChange(2), 2);
  });
  it("should return 6", () => {
    assertEquals(getChange(28), 6);
  });
});

