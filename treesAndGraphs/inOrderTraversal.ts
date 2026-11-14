function inorderTraversal(root: TreeNode | null): number[] {
  // in order handle left side first, then node itself, then right side
  const result: number[] = [];
  const dfs = (node: TreeNode): void => {
    if (!node) return;
    dfs(node.left);

    // left side finished
    result.push(node.val);
    dfs(node.right);
  };

  dfs(root);

  return result;
}
