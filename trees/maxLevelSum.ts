function maxLevelSum(root: TreeNode | null): number {
  // stack to track levels
  // max tracker
  if (!root) return 0;
  const queue: TreeNode[] = [root];
  let max = -Infinity;
  let level = 0;
  let bestLevel = 0;

  while (queue.length > 0) {
    level++;
    const size = queue.length;
    let sum = 0;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (sum > max) {
      max = sum;
      bestLevel = level;
    }
  }
  return bestLevel;
}
