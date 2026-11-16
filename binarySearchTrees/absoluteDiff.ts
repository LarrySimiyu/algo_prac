function getMinimumDifference(root: TreeNode | null): number {
  let min = Infinity;
  let prev: number | null = null;

  const inorder = (node: TreeNode | null): void => {
    if (!node) return;

    inorder(node.left);

    if (prev !== null) min = Math.min(min, node.val - prev);
    prev = node.val;
    inorder(node.right);
  };

  inorder(root);
  return min;
}
