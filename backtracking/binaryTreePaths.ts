function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];
  const path: number[] = [];

  const dfs = (node: TreeNode | null): void => {
    if (!node) return;

    path.push(node.val);
    if (!node.left && !node.right) result.push(path.join("->"));

    dfs(node.left);
    dfs(node.right);

    path.pop();
  };

  dfs(root);
  return result;
}
