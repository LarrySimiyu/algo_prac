function kthSmallest(root: TreeNode | null, k: number): number {
  // smallest element will always be the left most
  let count: number = 0;
  let result: number = 0;
  const inorder = (node: TreeNode): TreeNode | null => {
    if (!node || count >= k) return;

    inorder(node.left);
    count++;
    if (count === k) {
      result = node.val;
      return;
    }
    inorder(node.right);
  };

  inorder(root);
  return result;
}
