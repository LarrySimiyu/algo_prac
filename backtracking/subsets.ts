/* Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] */
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = []; // building the current subset

  const dfs = (i: number): void => {
    // no element left to decide on, every single one has been given a yes or a no
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
