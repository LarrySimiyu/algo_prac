function isSymmetric(root: TreeNode | null): boolean {
  // outside pair and inside pair have to be equal

  // recursion solution  too
  const isMirror = (a: TreeNode | null, b: TreeNode | null): boolean => {
    if (!a && !b) return true;
    if (!a || !b) return false;

    if (a.val !== b.val) return false;

    return isMirror(a.left, b.right) && isMirror(a.right, b.left);
  };

  if (!root) return true;
  return isMirror(root.left, root.right);
}
