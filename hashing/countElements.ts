/* Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

 

Example 1:

Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr. */

// easy
//
const countElements = (arr: number[]): number => {
  const numSet = new Set(arr);
  let count = 0;

  arr.forEach((x) => {
    if (numSet.has(x + 1)) {
      count += 1;
    }
  });
  return count;
};
