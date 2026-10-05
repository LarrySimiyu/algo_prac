const isValid = (s: string): boolean => {
  // look up object
  const matching: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack: string[] = [];

  // loop through char of string
  for (const char of s) {
    if (char in matching) {
      // save until a closer shows up
      stack.push(char);
    } else {
      // closer shows up it must match the most recent opener
      const opener = stack.pop();
      if (opener === undefined || matching[opener] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
