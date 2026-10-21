function evalRPN(tokens: string[]): number {
  /* so add numbers to stack
each operator pops the last two numbers and uses the operator
takes the result and adds it to the stack */

  // RPN writes "left right op", so the 1st pop is the right operand and the 2nd pop is the left
  let stack: number[] = [];

  for (const op of tokens) {
    if (op === "+") {
      const first = stack.pop();
      const second = stack.pop();

      const result = first + second;
      stack.push(result);
    } else if (op === "-") {
      const first = stack.pop();
      const second = stack.pop();

      const result = second - first;
      stack.push(result);
    } else if (op === "*") {
      const first = stack.pop();
      const second = stack.pop();

      const result = first * second;
      stack.push(result);
    } else if (op === "/") {
      const first = stack.pop();
      const second = stack.pop();

      const result = Math.trunc(second / first);
      stack.push(result);
    } else {
      stack.push(Number(op));
    }
  }
  return stack.pop();
}
