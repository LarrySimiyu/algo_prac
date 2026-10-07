/* Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:
Input: nums = [1], k = 1
Output: [1]
Example 3:
Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
Output: [1,2] */

function topKFrequent(nums: number[], k: number): number[] {
  // create a mpa with the count of each element

  const myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    // if the key exists then increment its value otherwise initialze it
    myMap.set(nums[i], (myMap.get(nums[i]) || 0) + 1);
  }

  return [...myMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
}
