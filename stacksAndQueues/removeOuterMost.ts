function removeOuterParentheses(s: string): string {
  let stack = [];

  let depth = 0;

  for (const char of s) {
    if (char === "(") {
      if (depth > 0) stack.push(char);
      depth++;
    } else {
      depth--;
      if (depth > 0) stack.push(char);
    }
  }
  return stack.join("");
}
