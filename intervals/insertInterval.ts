function insert(intervals: number[][], newInterval: number[]): number[][] {
  // two intervals are considered overlapping if they share at least one point
  // insrt the new interval, sort in ascending order
  // merge intervals if needed
  // before intervals end < less than new one
  // after intervals start > new ones end. begis after the new one finishes
  const result: number[][] = [];
  let inserted: boolean = false;

  for (const [start, end] of intervals) {
    if (end < newInterval[0]) {
      // if current interval ends before the new one starts , push
      result.push([start, end]);
      // interval starting after the new one ended
    } else if (start > newInterval[1]) {
      if (!inserted) {
        result.push(newInterval);
        inserted = true;
      }

      result.push([start, end]);
    } else {
      // overlap detected, dont push yet, there might be another overlap
      newInterval[0] = Math.min(newInterval[0], start);
      newInterval[1] = Math.max(newInterval[1], end);
    }
  }

  // no after so push to end
  if (!inserted) {
    result.push(newInterval);
  }

  return result;
}
