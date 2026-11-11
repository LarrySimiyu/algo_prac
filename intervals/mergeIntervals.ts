function merge(intervals: number[][]): number[][] {
  // sort from least to greatest by their starting time
  // check next meeting time against prev meeting
  // if in range then [prev, currEnd]

  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const prev = result[result.length - 1];
    // if start of current is less than or equal to prev end we figure out the max endings between the two
    if (intervals[i][0] <= prev[1]) {
      prev[1] = Math.max(prev[1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
}
