function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let node: TreeNode | null = root;

  // loop through as soon as cant go left or right return the node

  while (node) {
    if (p!.val < node.val && q!.val < node.val) {
      node = node.left;
    } else if (p!.val > node.val && q!.val > node.val) {
      node = node.right;
    } else {
      return node; // where they seperated, automatically the lowest
    }
  }
  return null;
}
