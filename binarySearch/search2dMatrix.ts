function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;

  while (top <= bottom) {
    // find the middle
    const mid = Math.floor((top + bottom) / 2);
    // find the last number in that row
    const last = matrix[mid][cols - 1];

    // check against target
    if (last < target) {
      top = mid + 1;
    } else {
      bottom = mid - 1;
    }
  }

  // target is bigger than rows
  if (top === rows) return false;

  // regular binary search inside the row
  const row = matrix[top];
  let left = 0;
  let right = cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (row[mid] === target) return true;

    if (row[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

//
