function shortestPathBinaryMatrix(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue: number[][] = [[0, 0, 1]];
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  if (grid[0][0] === 1) return -1;
  grid[0][0] = 1;

  while (queue.length > 0) {
    const [r, c, distance] = queue.shift();
    // found bottoom right return its carried distance
    if (r === rows - 1 && c === cols - 1) return distance;

    for (const [dr, dc] of dirs) {
      const [nr, nc] = [r + dr, c + dc];
      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;
      if (grid[nr][nc] !== 0) continue;

      grid[nr][nc] = 1; // mark at push time so no cell is queued twice
      queue.push([nr, nc, distance + 1]);
    }
  }
  return -1;
}
