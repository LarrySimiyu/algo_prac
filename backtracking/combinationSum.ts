function combinationSum(candidates: number[], target: number): number[][] {
  const path: number[] = [];
  const res: number[][] = [];

  const dfs = (start: number, remaining: number): void => {
    if (remaining < 0) return;
    if (remaining === 0) {
      res.push([...path]);
    }

    // keep re running until remaining is )
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      dfs(i, remaining - candidates[i]);
      path.pop();
    }
  };

  dfs(0, target);
  return res;
}
