function maxDepth(root: TreeNode | null): number {
  // if no node return 0
  if (!root) return 0;

  // get depth of left side
  // get depth of right side
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  // return taller side + 1 for this node
  return Math.max(left, right) + 1;
}
