function romanToInt(s: string): number {
  const values: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // subtractive when the current symbol is smaller than the next one
  // track the total
  // if next doesnt exist then just make it 0 and add it anyways to show the end
  //
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = values[s[i]];
    const next = values[s[i + 1]] ?? 0;

    total += curr < next ? -curr : curr;
  }

  return total;
}
