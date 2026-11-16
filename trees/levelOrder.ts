function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  // queue track nodes in order they were found
  // level will be pushed into result
  //
  while (queue.length) {
    const size = queue.length;
    const level = [];
    // loop to get the nodes of the current level
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}
