function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];

  const res: string[] = [];
  const path: string[] = [];
  const map: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const dfs = (i: number): void => {
    if (i === digits.length) {
      res.push(path.join(""));
      return;
    }
    for (const ch of map[digits[i]]) {
      path.push(ch);
      dfs(i + 1);
      path.pop();
    }
  };

  dfs(0);
  return res;
}
