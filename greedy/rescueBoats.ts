function numRescueBoats(people: number[], limit: number): number {
  let left: number = 0;
  let right: number = people.length - 1;
  let count: number = 0;

  people.sort((a, b) => a - b);
  while (left <= right) {
    const sum = people[right] + people[left];
    if (sum <= limit) {
      count++;
      left++;
      right--;
    }
    if (sum > limit) {
      count++;
      right--;
    }
  }

  return count;
}
