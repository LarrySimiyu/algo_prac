function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // both empty at this spot, so this spot matches
  if (!p && !q) return true;
  // only one is empty, so the shapes differ
  if (!p || !q) return false;
  // both exist but hold different values
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
