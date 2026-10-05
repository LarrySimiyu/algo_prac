/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]

Output: 2

Explanation:

n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums. */

//easy
//take the total of the expected value, loop through the given array in the second loop. subratract from expected to find the missing
const missingNumber = (nums: number[]) => {
  const n = nums.length;
  let expectedTotal = 0;

  for (let i = 0; i <= n; i++) expectedTotal += i;

  let actual = 0;
  for (const num of nums) actual += num;

  return expectedTotal - actual;
};
