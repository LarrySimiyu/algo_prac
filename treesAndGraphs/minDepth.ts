/* Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children. */

const minDepth = (root): number => {
  // check if there is a node
  if (!root) {
    return 0;
  }
  // if root exists but no children on either side
  if (!root.left && !root.right) return 1;

  // if only one child exists the missing side is not a path so return the real side
  // +1 counts the current node itself
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;

  let left = minDepth(root.left);
  let right = minDepth(root.right);
  return Math.min(left, right) + 1;
};
