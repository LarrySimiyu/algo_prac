function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  // shrinking the target as we visit certain nodes
  // when it gets to 0 and the last node we checked has no children
  if (!root) return false;
  if (!root.left && !root.right) return targetSum === root.val;

  const remaining = targetSum - root.val;

  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
}
