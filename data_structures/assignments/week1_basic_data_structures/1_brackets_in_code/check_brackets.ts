const openingBrackets = ["(", "[", "{"];
const isOpeningBracket = (bracket: string): boolean =>
  openingBrackets.includes(bracket);

const mapOpeningToClosingBracket = (bracket: string): string | undefined => ({
  "(": ")",
  "[": "]",
  "{": "}",
}[bracket]);

export const checkBrackets = (input: string): boolean => {
  const stack: string[] = [];
  for (const bracket of input.split("")) {
    if (isOpeningBracket(bracket)) {
      stack.push(bracket);
    } else {
      const lastBracket = stack.pop();
      if (!lastBracket) {
        return false;
      }
      const closingBracket = mapOpeningToClosingBracket(lastBracket);
      if (closingBracket !== bracket) {
        return false;
      }
    }
  }
  // If all elements from the stack were removed then the input was symmetrical
  return stack.length === 0;
};
