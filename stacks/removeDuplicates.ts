// remove using a stack always check the current character with the last one in the stack.
// if they are the same then dont add it to the stack and remove whatever character matched
// along with it.
// "abbaca"
const removeDuplicates = (s: string): string => {
  const stack: string[] = [];

  for (const char of s) {
    if (stack.length && stack[stack.length - 1] == char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};
