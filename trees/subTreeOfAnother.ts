function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const isSameTree = (a: TreeNode | null, b: TreeNode | null): boolean => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    if (a.val !== b.val) return false;
    return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
  };

  if (!root) return false;
  return (
    isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  );
}
