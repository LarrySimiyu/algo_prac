function goodNodes(root: TreeNode | null): number {
  let count = 0;

  const dfs = (node: TreeNode | null, maxSoFar: number): void => {
    if (!node) return;

    // is this node good?
    if (node.val >= maxSoFar) count++; // tires count as good
    // compute the max to hand to the children
    const newMax = Math.max(maxSoFar, node.val); // node might be the new biggest
    // recurse left and right
    dfs(node.left, newMax);
    dfs(node.right, newMax);
  };

  dfs(root, -Infinity); // -Infinity so the root always counts
  return count;
}
