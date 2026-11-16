function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  // everything in left subtree is smaller than the node
  if (!root) return null;
  if (val === root.val) return root;

  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
}
