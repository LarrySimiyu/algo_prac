function sumNumbers(root: TreeNode | null): number {
  let total: number = 0;

  const dfs = (node: TreeNode | null, current: number): void => {
    if (!node) return;

    // calc that adds 0 to number and then can append our new value
    // since numbers are 0 - 9
    current = current * 10 + node.val;
    if (!node.left && !node.right) total += current;
    dfs(node.left, current);
    dfs(node.right, current);
  };
  dfs(root, 0);
  return total;
}
