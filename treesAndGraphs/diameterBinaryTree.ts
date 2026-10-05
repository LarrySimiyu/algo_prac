const diameter = (root): number => {
  let best = 0; // longest path found so far, at any node

  // returns depth so the parent can build its own path on top of it
  const depth = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left = depth(node.left);
    const right = depth(node.right);

    // path that turns at this node: deepest left + deepest right
    best = Math.max(best, left + right);

    // parent only extends one side, so hand up the deeper one plus this node
    return Math.max(left, right) + 1;
  };

  depth(root);
  return best; // depth's return value was just for the parents; the answer lives in best
};
