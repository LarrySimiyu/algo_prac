/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
  representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1. */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // override the placeholder digits from the back with nums 2

  for (let j = 0; j < n; j++) {
    nums1[m + j] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
}
