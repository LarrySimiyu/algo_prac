function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // return true if all courses can be taken
  // count how many pre reqs per course
  const prereqCount: number[] = new Array(numCourses).fill(0);
  const unlocks: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [a, b] of prerequisites) {
    prereqCount[a] += 1;
    unlocks[b].push(a);
  }

  const queue: number[] = [];
  for (let c = 0; c < numCourses; c++) {
    if (prereqCount[c] === 0) {
      queue.push(c);
    }
  }

  let taken = 0;

  while (queue.length > 0) {
    const course = queue.shift();
    taken += 1;

    for (const next of unlocks[course]) {
      prereqCount[next] -= 1;

      if (prereqCount[next] === 0) {
        queue.push(next);
      }
    }
  }

  return taken === numCourses;
}
