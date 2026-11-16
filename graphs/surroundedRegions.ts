function solve(board: string[][]): void {
  const rows = board.length;
  const cols = board[0].length;

  const fill = (r: number, c: number) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== "O") return; // off-grid or not land
    board[r][c] = "S";
    fill(r - 1, c);
    fill(r + 1, c);
    fill(r, c - 1);
    fill(r, c + 1);
  };

  // loop through outer
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const onBoarder = r === 0 || r === rows - 1 || c === 0 || c === cols - 1;
      if (onBoarder && board[r][c] === "O") fill(r, c);
    }
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O")
        board[r][c] = "X"; // never reached from the border → surrounded
      else if (board[r][c] === "S") board[r][c] = "O"; // safe → restore
    }
  }
}
