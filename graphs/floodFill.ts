function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const original = image[sr][sc];

  if (original === color) return image;

  // helper that gets called for filling

  const fill = (row: number, col: number): void => {
    // check if im out of bounds
    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length) return;

    if (image[row][col] !== original) return;

    image[row][col] = color;

    // up, down, left, right
    fill(row - 1, col);
    fill(row + 1, col);

    fill(row, col - 1);
    fill(row, col + 1);
  };

  fill(sr, sc);
  return image;
}
