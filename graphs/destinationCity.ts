function destCity(paths: string[][]): string {
  const outgoing = new Set();

  for (const [a, b] of paths) {
    outgoing.add(a);
  }
  for (const [a, b] of paths) {
    if (!outgoing.has(b)) return b;
  }
  return "";
}
