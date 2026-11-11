function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];
  let start: number = nums[0];

  for (let i = 0; i < nums.length; i++) {
    // check if sequence ends here
    if (nums[i + 1] - nums[i] !== 1) {
      if (start === nums[i]) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${nums[i]}`);
      }
      start = nums[i + 1];
    }
  }
  return result;
}

/* Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7" */
