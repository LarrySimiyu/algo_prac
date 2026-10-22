function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  // stop when left and right meet at the minimum

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // if middle is bigger than the last number in the range then
    // min number is to the right of mid
    // otherwise min is at mid or its to the left
    const last = nums[right];
    if (nums[mid] > last) {
      // mid is in the bigger left piece so the min is past that
      left = mid + 1;
    } else {
      // mid might  be the min so we keep it in range
      right = mid;
    }
  }

  return nums[left];
}
