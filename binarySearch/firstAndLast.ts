function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      // first instance can possibly be on the left
      right = mid;
    } else {
      // too small
      left = mid + 1;
    }
  }

  const first = left;
  if (nums[left] !== target) return [-1, -1];
  right = nums.length - 1;
  while (left < right) {
    const mid = Math.ceil((left + right) / 2);

    if (nums[mid] <= target) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return [first, left];
}
