/* Given the root of a binary tree, find the maximum value v for which there exist different
nodes a and b where v = |a.val - b.val| and a is an ancestor of b.
A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b. */
/* 
Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7 */

/* A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b. */

const maxAncestorDiff = (root): number => {
  if (!root) return 0;
  const dfs = (node, min: number, max: number) => {
    // base case fell off at the end of the path
    if (!node) return max - min;

    // update min max with node value

    min = Math.min(min, node.val);
    max = Math.max(max, node.val);

    const leftDiff = dfs(node.left, min, max);
    const rightDiff = dfs(node.right, min, max);

    return Math.max(leftDiff, rightDiff);
  };
  return dfs(root, root.val, root.val);
};
