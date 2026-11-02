function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let i = 0;
  let stack: number[] = [];

  for (const num of pushed) {
    stack.push(num);

    while (stack.length > 0 && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }

  return stack.length === 0; // anything left could never be popped in the order
}
