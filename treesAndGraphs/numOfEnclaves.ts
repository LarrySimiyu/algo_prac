function numEnclaves(grid: number[][]): number {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const fill = (r: number, c: number): void => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== 1) return; // off-grid or not land

    grid[r][c] = 0;
    fill(r - 1, c);
    fill(r + 1, c);
    fill(r, c - 1);
    fill(r, c + 1);
  };

  // loop through outer
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const onBorder = r === 0 || r === rows - 1 || c === 0 || c === cols - 1;
      if (onBorder && grid[r][c] === 1) fill(r, c);
    }
  }

  // whatever land is left is trapped

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) count++;
    }
  }

  return count;
}
