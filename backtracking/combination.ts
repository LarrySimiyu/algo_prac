/* Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]] */
function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];

  const dfs = (start: number): void => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    for (let num = start; num <= n; num++) {
      path.push(num);
      dfs(num + 1);
      path.pop();
    }
  };

  dfs(1);
  return res;
}
