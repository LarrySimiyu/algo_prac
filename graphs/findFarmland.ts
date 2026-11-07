function findFarmland(land: number[][]): number[][] {
  /*   each rectangle, return [topRow, leftCol, bottomRow, rightCol] */
  const rows = land.length;
  const cols = land[0].length;

  const result: number[][] = [];
  let maxRow = 0;
  let maxCol = 0;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const fill = (r: number, c: number): void => {
    if (r < 0 || c < 0 || r >= rows || c >= cols) return;
    if (land[r][c] === 0) return;
    // mark as visited so we dont redo
    land[r][c] = 0;
    // furthest down / furthest right cell reached = bottom-right corner

    maxRow = Math.max(maxRow, r);
    maxCol = Math.max(maxCol, c);

    for (const [dr, dc] of dirs) {
      fill(r + dr, c + dc);
    }
  };

  // scan and find 1
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (land[r][c] === 1) {
        // first 1 found in scan order is this rectangle's top-left
        maxRow = r;
        maxCol = c;
        fill(r, c);
        result.push([r, c, maxRow, maxCol]);
      }
    }
  }
  return result;
}
