const diameter = (root): number => {
  let best = 0;

  const height = (node: any): number => {
    if (!node) return 0;
    const left = height(node.left);
    const right = height(node.right);
    best = Math.max(best, left + right);
    return 1 + Math.max(left, right);
  };

  height(root);
  return best;
};
