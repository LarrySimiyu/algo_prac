const canAttendMeetings = (intervals: number[][]): boolean => {
  // line meetings up by start so each only needs checking against the one before it

  // check the starting time of current meeting vs previos meetings ending time
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    const prev = intervals[i - 1];

    if (intervals[i][0] < prev[1]) return false;
  }
  return true;
};

// [[0,30],[5,10],[15,20]] → false
// [[7,10],[2,4]]          → true
// [[1,5],[5,8]]           → true
// []                      → true
