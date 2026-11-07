function isValidBST(root: TreeNode | null): boolean {
  const validCheck = (node: TreeNode | null, low: number, high: number): boolean => {
    if (!node) return true;

    if (node.val <= low || node.val >= high) return false;

    return validCheck(node.left, low, node.val) && validCheck(node.right, node.val, high);
  };

  return validCheck(root, -Infinity, Infinity);
}
