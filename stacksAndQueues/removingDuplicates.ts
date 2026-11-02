function removeDuplicates(s: string, k: number): string {
  const stack: [string, number][] = []; // [letter, how many in a row so far]
  for (const ch of s) {
    // if top letter matches bump its count .. pop pair when it hits k
    // else push [ch, 1]

    if (stack.length > 0 && stack[stack.length - 1][0] === ch) {
      stack[stack.length - 1][1]++;

      if (stack[stack.length - 1][1] === k) stack.pop();
    } else {
      stack.push([ch, 1]);
    }
  }
  return stack.map(([ch, n]) => ch.repeat(n)).join("");
}
