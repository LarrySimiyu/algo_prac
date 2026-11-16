function findTarget(root: TreeNode | null, k: number): boolean {
  const seen = new Set<number>();

  const dfs = (node: TreeNode): boolean => {
    if (!node) return false;
    const need = k - node.val;

    if (seen.has(need)) return true;
    seen.add(node.val);

    return dfs(node.left) || dfs(node.right);
  };

  return dfs(root);
}
