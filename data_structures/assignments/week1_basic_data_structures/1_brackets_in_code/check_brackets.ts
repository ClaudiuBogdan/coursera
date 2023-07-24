const openingBrackets = ["(", "[", "{"];
const closingBracket = [")", "]", "}"];
const brackets = [...openingBrackets, ...closingBracket];
const isBracket = (char: string): boolean => brackets.includes(char);

const isOpeningBracket = (bracket: string): boolean =>
  openingBrackets.includes(bracket);

const mapOpeningToClosingBracket = (bracket: string): string | undefined => ({
  "(": ")",
  "[": "]",
  "{": "}",
}[bracket]);

export const checkBrackets = (input: string): number => {
  const stack: { bracket: string; position: number }[] = [];
  let position = 1;
  for (; position - 1 < input.length; position++) {
    const char = input[position - 1];
    if (!isBracket(char)) {
      continue;
    }

    if (isOpeningBracket(char)) {
      stack.push({ bracket: char, position });
      continue;
    }

    const lastBracket = stack.pop();
    if (!lastBracket) {
      return position;
    }

    const closingBracket = mapOpeningToClosingBracket(lastBracket.bracket);
    if (closingBracket !== char) {
      return position;
    }
  }
  // If all elements from the stack were removed then the input was symmetrical
  return stack.length === 0 ? -1 : stack[stack.length - 1].position;
};

export const computeBracketSolution = (input: string): number | "Success" => {
  const result = checkBrackets(input);
  return result === -1 ? "Success" : result;
};
