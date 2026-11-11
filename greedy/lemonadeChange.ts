function lemonadeChange(bills: number[]): boolean {
  let fives: number = 0;
  let tens: number = 0;

  // customer paying $5 everytime, return true if we can give each customer correct change
  for (const b of bills) {
    if (b === 5) {
      fives++;
    } else if (b === 10) {
      if (fives === 0) return false;
      tens++;
      fives--;
    } else {
      if (tens > 0 && fives > 0) {
        tens--;
        fives--;
      } else if (fives >= 3) {
        fives -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
}
