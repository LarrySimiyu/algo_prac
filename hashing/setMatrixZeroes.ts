/* Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.
Input: matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
Output: [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
]; */
function setZeroes(matrix: number[][]): void {
  // if you find a 0 make the entire row and the current column turn to 0
  // step1: find the zeroes
  // check the sets: is the cells row or column in the sets then if so turn it to 0

  // decide from the sets where zeroes are added, no repeated zeroes will occur because of the unique Set
  const zeroR = new Set();
  const zeroC = new Set();

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      // current cell
      const cell = matrix[r][c];

      if (cell === 0) {
        zeroR.add(r);
        zeroC.add(c);
      }
    }
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (zeroR.has(r) || zeroC.has(c)) {
        matrix[r][c] = 0;
      }
    }
  }
}
