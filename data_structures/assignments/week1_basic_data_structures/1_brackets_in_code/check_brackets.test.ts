import { assertEquals } from "std/testing/asserts.ts";
import { it } from "std/testing/bdd.ts";
import { describe } from "std/testing/bdd.ts";
import { checkBrackets } from "./check_brackets.ts";

describe("check brackets symmetry", () => {
  it("should return true for symmetrical brackets", () => {
    const symmetricalBrackets = "([{}])";

    const isSymmetrical = checkBrackets(symmetricalBrackets);

    assertEquals(isSymmetrical, true);
  });

  it("should return true for empty", () => {
    const symmetricalBrackets = "";

    const isSymmetrical = checkBrackets(symmetricalBrackets);

    assertEquals(isSymmetrical, true);
  });

  it("should return false for non-symmetrical brackets input", () => {
    const symmetricalBrackets = "(([[{";

    const isSymmetrical = checkBrackets(symmetricalBrackets);

    assertEquals(isSymmetrical, false);
  });

  it("should return false for non-symmetrical brackets input 2", () => {
    const symmetricalBrackets = "(([[]]))(";

    const isSymmetrical = checkBrackets(symmetricalBrackets);

    assertEquals(isSymmetrical, false);
  });

  it("should return false for non-symmetrical brackets input 3", () => {
    const symmetricalBrackets = "]]))(";

    const isSymmetrical = checkBrackets(symmetricalBrackets);

    assertEquals(isSymmetrical, false);
  });
});
