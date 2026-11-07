function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  // find the nodes that are in the range
  // get their sum

  let total = 0;
  const sum = (node: TreeNode): void => {
    if (!node) return;
    const inRange = node.val >= low && node.val <= high;
    if (inRange) total += node.val;

    // check if the side of the tree is worth visiting or can be ignored
    if (node.val > low) sum(node.left);
    if (node.val < high) sum(node.right);
  };

  sum(root);
  return total;
}
