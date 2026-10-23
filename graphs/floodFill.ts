function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const original = image[sr][sc];

  // will cause an infinite loop
  if (original === color) return;

  const fill = (r: number, c: number): void => {
    if (r < 0 || row >= image.length || col < 0 || col >= image[0].length) return;

    // check if pixel is already painted
    // if pizel is anything besides original that means its either changed or a wall (pizel not worth changing)
    if (image[r][c] !== original) return;

    image[r][c] = color;

    // down, up, left, right
    fill(r - 1, c);
    fill(r + 1, c);
    fill(r, col - 1);
    fill(r, col + 1);
  };
  fill(sr, sc);
  return image;
}
