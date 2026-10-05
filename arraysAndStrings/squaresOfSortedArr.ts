/* Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121] */

const sortedSquares = (nums: number[]): number[] => {
  const result = new Array<number>(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (let pos = nums.length - 1; pos >= 0; pos--) {
    // square each pointer the compare them to each other
    const a = nums[left] ** 2;
    const b = nums[right] ** 2;

    if (a > b) {
      result[pos] = a;
      left++;
    } else {
      result[pos] = b;
      right--;
    }
  }
  return result;
};
