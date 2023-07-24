export const getChange = (m: number): number => {
  let coins = 0;
  while (m > 0) {
    if (m >= 10) {
      m -= 10;
    } else if (m >= 5) {
      m -= 5;
    } else {
      m -= 1;
    }
    coins++;
  }
  return coins;
};
