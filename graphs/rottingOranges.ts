// BFS
const orangesRotting = (grid: number[][]): number => {
  // every rotten orange starts spreading at minute 0
  const rows = grid.length;
  const cols = grid[0].length;
  const queue: number[][] = [];

  let fresh = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      if (grid[r][c] === 1) fresh++;
    }
  }
  // each minute rot 4 neighbors
  // add to the queue at the end of the minute so we dont go in a loop
  //

  // help move to neighbors
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  let minutes = 0;

  while (queue.length > 0 && fresh > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
        if (grid[nr][nc] !== 1) continue;

        grid[nr][nc] = 2;
        fresh--;
        queue.push([nr, nc]);
      }
    }

    minutes++;
  }

  return fresh === 0 ? minutes : -1;
};
