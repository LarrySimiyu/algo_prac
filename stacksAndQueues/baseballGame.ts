function calPoints(operations: string[]): number {
  // stack to hold the record
  let stack = [];

  for (const op of operations) {
    if (op === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else if (op === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (op === "C") {
      stack.pop();
    } else {
      // everything must be converted before being pushed into the numbers stack
      stack.push(Number(op));
    }
  }
  return stack.reduce((acc, curr) => acc + curr, 0);
}
