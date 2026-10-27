function maxAreaOfIsland(grid: number[][]): number {
  // track the biggest island visited
  let max: number = 0;

  const fill = (r: number, c: number): number => {
    // stop if off grid
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return 0;

    if (grid[r][c] !== 1) return 0;

    grid[r][c] = 0;

    // 1 for this cell, plus whatever each direction erased
    return 1 + fill(r - 1, c) + fill(r + 1, c) + fill(r, c - 1) + fill(r, c + 1);
  };

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        const res = fill(r, c);
        max = Math.max(max, res);
      }
    }
  }
  return max;
}
