import { assertEquals } from "std/testing/asserts.ts";
import { it } from "std/testing/bdd.ts";
import { describe } from "std/testing/bdd.ts";
import { checkBrackets, computeBracketSolution } from "./check_brackets.ts";

describe("check brackets symmetry", () => {
  it("should return true for symmetrical brackets", () => {
    const input = "()";

    const isSymmetrical = checkBrackets(input);

    assertEquals(isSymmetrical, -1);
  });

  it("should return true for symmetrical brackets", () => {
    const input = "([{}])";

    const isSymmetrical = checkBrackets(input);

    assertEquals(isSymmetrical, -1);
  });

  it("should return true for empty", () => {
    const input = "";

    const isSymmetrical = checkBrackets(input);

    assertEquals(isSymmetrical, -1);
  });

  it("should return false for non-symmetrical brackets input", () => {
    const input = "(([[{";

    const isSymmetrical = checkBrackets(input);

    assertEquals(isSymmetrical, 5);
  });

  it("should return false for non-symmetrical brackets input 2", () => {
    const input = "(([[]]))(";

    const isSymmetrical = checkBrackets(input);

    assertEquals(isSymmetrical, 9);
  });

  it("should return false for non-symmetrical brackets input 3", () => {
    const input = "]]))(";

    const isSymmetrical = checkBrackets(input);

    assertEquals(isSymmetrical, 1);
  });

  it("should return Success for symmetrical brackets", () => {
    const symmetricalBrackets = "{}";

    const result = computeBracketSolution(symmetricalBrackets);

    assertEquals(result, "Success");
  });

  it("should return 9 for non-symmetrical brackets input", () => {
    const input = "hello( ){";

    const isSymmetrical = checkBrackets(input);

    assertEquals(isSymmetrical, 9);
  });
});
