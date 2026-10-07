/* Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. */

function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);

  let longest = 0;
  for (const num of set) {
    //if the number right before me exists, I'm not the start of my sequence, so don't bother counting from me.
    if (set.has(num - 1)) continue;

    let length = 1;

    while (set.has(num + length)) {
      length++;
    }
    longest = Math.max(longest, length);
  }

  return longest;
}
