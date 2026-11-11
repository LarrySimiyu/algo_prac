/* Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] */
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  const dfs = (i: number): void => {
    if (i === nums.length) {
      result.push([...path]);
      return;
    }

    path.push(nums[i]);

    dfs(i + 1);
    path.pop();
    dfs(i + 1);
  };

  dfs(0);
  return result;
}
