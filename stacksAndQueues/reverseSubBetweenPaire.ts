function reverseParentheses(s: string): string {
  const stack: string[] = [];

  for (const char of s) {
    if (char === ")") {
      // pop until (
      const temp: string[] = [];
      while (stack[stack.length - 1] !== "(") {
        temp.push(stack.pop()!);
      }
      stack.pop();
      stack.push(...temp);
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}
