function numIslands(grid: string[][]): number {
  let count: number = 0;

  const fill = (r: number, c: number): void => {
    // stop at the edge
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return;

    if (grid[r][c] !== "1") return;

    grid[r][c] = "0";

    fill(r - 1, c);
    fill(r + 1, c);
    fill(r, c - 1);
    fill(r, c + 1);
  };

  // loop to go through the grid
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        count++;
        fill(r, c);
      }
    }
  }

  return count;
}
