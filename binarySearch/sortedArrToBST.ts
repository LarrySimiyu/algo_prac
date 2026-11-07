function sortedArrayToBST(nums: number[]): TreeNode | null {
  const build = (low: number, high: number): TreeNode | null => {
    // take window of array and return the root of the balanced BST
    if (low > high) return null;
    const middleIndex = Math.floor((low + high) / 2);

    // create node from middle
    const node = new TreeNode(nums[middleIndex]);

    node.left = build(low, middleIndex - 1);
    node.right = build(middleIndex + 1, high);

    return node;
  };

  return build(0, nums.length - 1);
}
