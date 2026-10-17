function removeDuplicates(nums: number[]): number {
  // two pointer solution
  let left = 1; // we already accounted for nums[0] its always going to stay

  for (let right = 1; right < nums.length; right++) {
    // check if left is a duplicate of the last right
    if (nums[right] !== nums[left - 1]) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left; // accounts for the count of existing unique values too
}
