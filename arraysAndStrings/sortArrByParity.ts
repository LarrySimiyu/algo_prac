function sortArrayByParity(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // if left is positive and right is negative then we just leave them alone in those cases
    if (nums[left] % 2 === 0) left++;
    else if (nums[right] % 2 !== 0) right--;
    else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
      left++;
    }
  }
  return nums;
}
