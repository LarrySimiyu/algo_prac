function nearestExit(maze: string[][], entrance: number[]): number {
  const rows = maze.length;
  const cols = maze[0].length;
  const queue: number[][] = [entrance];
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // mark entrance so we never walk back onto it
  maze[entrance[0]][entrance[1]] = "+";

  let steps = 0;

  while (queue.length > 0) {
    // queue reached cells that havent been looked around
    const ringSize = queue.length;
    steps++;

    for (let i = 0; i < ringSize; i++) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of dirs) {
        const nr = dr + r;
        const nc = dc + c;

        // off the grid, or a wall /  already visted
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
        if (maze[nr][nc] === "+") continue;

        // open cell on the edge = exit; steps is already the distance to it
        if (nr === 0 || nr === rows - 1 || nc === 0 || nc === cols - 1) {
          return steps;
        }

        // reached a new inner cell: mark it and explore from it later
        maze[nr][nc] = "+";
        queue.push([nr, nc]);
      }
    }
  }
  return -1;
}
