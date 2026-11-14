function combinationSum3(k: number, n: number): number[][] {
  // k different numbers from 1-9 that add up to n
  // each number appear once max
  const path: number[] = [];
  const res: number[][] = [];

  const dfs = (start: number, remaining: number): void => {
    if (path.length === k) {
      if (remaining === 0) res.push([...path]);
      return;
    }

    // overshot
    if (remaining < 0) return;

    for (let i = start; i <= 9; i++) {
      path.push(i);
      dfs(i + 1, remaining - i);
      path.pop();
    }
  };

  dfs(1, n);
  return res;
}
