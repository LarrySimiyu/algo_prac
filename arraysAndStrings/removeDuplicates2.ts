// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]

function removeDuplicatesTwo(nums: number[]): number {
  if (nums.length <= 2) return nums.length;
  let left = 2;
  for (let right = 2; right < nums.length; right++) {
    if (nums[right] !== nums[left - 2]) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
}
