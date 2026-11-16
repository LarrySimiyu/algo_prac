function deepestLeavesSum(root: TreeNode | null): number {
  // level order traversal
  if (!root) return 0;
  const queue: TreeNode[] = [root];

  let sum: number = 0;
  while (queue.length > 0) {
    sum = 0;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return sum;
}
