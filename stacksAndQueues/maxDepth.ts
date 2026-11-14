function maxDepth(s: string): number {
  let depth: number = 0;
  let max: number = 0;

  for (const char of s) {
    if (char === "(") {
      depth++;
      max = Math.max(depth, max);
    } else if (char === ")") {
      depth--;
    }
  }

  return max;
}
