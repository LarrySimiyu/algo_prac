function backspaceCompare(s: string, t: string): boolean {
  // regular letter add to the stack
  // # delete the last letter from the stack

  const buildStack = (str: string): string => {
    const stack: string[] = [];

    for (const char of str) {
      if (char === "#") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    return stack.join("");
  };
  return buildStack(s) === buildStack(t);
}
