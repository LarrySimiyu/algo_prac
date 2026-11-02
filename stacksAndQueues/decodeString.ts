const decodeString = (s: string): string => {
  const countStack: number[] = []; // repeat counts waiting for their ]
  const strStack: string[] = []; // what was built before each [
  let curr = ""; // string inside the current bracket
  let num = 0; // digits being read, could be multi-digit

  for (const ch of s) {
    if (ch >= "0" && ch <= "9") {
      // build the number one digit at a time
      num = num * 10 + Number(ch);
    } else if (ch === "[") {
      // push num and curr, then reset both
      countStack.push(num);
      strStack.push(curr);
      num = 0;
      curr = "";
    } else if (ch === "]") {
      // pop both, combine with curr
      const count = countStack.pop();
      const prev = strStack.pop();
      curr = prev + curr.repeat(count);
    } else {
      // plain letter
      curr += ch;
    }
  }

  return curr;
};
