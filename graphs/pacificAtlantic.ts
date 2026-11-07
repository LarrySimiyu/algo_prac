function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
  const atlantic: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const result: number[][] = [];
  // fill to change visited and check against it
  const fill = (r: number, c: number, prevHeight: number, visited: boolean[][]): void => {
    // border stopper, if visited is already true
    if (r < 0 || c < 0 || r >= rows || c >= cols) return;
    if (visited[r][c]) return;
    if (heights[r][c] < prevHeight) return;

    visited[r][c] = true;

    for (const [dr, dc] of dirs) {
      fill(r + dr, c + dc, heights[r][c], visited);
    }
  };

  // fill atlantic to pacific (top to bottom)

  for (let r = 0; r < rows; r++) {
    fill(r, 0, heights[r][0], pacific);
    fill(r, cols - 1, heights[r][cols - 1], atlantic);
  }

  // Every column: top edge touches Pacific, bottom edge touches Atlantic
  for (let c = 0; c < cols; c++) {
    fill(0, c, heights[0][c], pacific);
    fill(rows - 1, c, heights[rows - 1][c], atlantic);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pacific[r][c] === atlantic[r][c]) result.push([r, c]);
    }
  }

  return result;
}
