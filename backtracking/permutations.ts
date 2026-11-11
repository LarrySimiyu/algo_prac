function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];

  const dfs = (): void => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue;

      path.push(nums[i]);
      dfs();
      path.pop();
    }
  };

  dfs();
  return res;
}
