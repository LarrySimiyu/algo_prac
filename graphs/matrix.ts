function updateMatrix(mat: number[][]): number[][] {
  const rows = mat.length;
  const cols = mat[0].length;
  const queue: number[][] = [];
  const dist: number[][] = Array.from({ length: rows }, () => new Array(cols).fill(-1));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        dist[r][c] = 0;
        queue.push([r, c]);
      }
    }
  }

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
      if (dist[nr][nc] !== -1) continue;

      dist[nr][nc] = dist[r][c] + 1;
      queue.push([nr, nc]);
    }
  }

  return dist;
}
