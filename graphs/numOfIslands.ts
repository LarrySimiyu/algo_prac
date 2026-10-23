function numIslands(grid: string[][]): number {
  let count = 0;

  const fill = (r: number, c: number): void => {
    // stop if its off grid
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return;

    // not 1 stop water or already erased
    if (grid[r][c] !== "1") return;

    // change to 0
    grid[r][c] = "0";

    fill(r - 1, c);
    fill(r + 1, c);
    fill(r, c - 1);
    fill(r, c + 1);
  };

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        // first cell on island we havent seen yet
        count++;
        fill(r, c);
      }
    }
  }
  return count;
}
