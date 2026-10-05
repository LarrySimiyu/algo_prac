/* Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

 

Example 1:

Input: nums = [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.
Example 2:

Input: nums = [9,9,8,8]
Output: -1
Explanation: There is no number that occurs only once.
  */

const largestUniqueNumber = (nums: number[]): number => {
  // make a map
  // only take numbers that appear once
  // push into an array and sort them. then get the largest
  // if there are no unique numbers then just return - 1
  const counts = new Map<number, number>();
  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  let largest = -1;

  for (const [num, count] of counts) {
    if (count === 1 && num > largest) largest = num;
  }

  return largest;
};
