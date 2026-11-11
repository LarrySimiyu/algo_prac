function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0;
  let cookie = 0;

  // while there is still a child and cookies are still there
  while (child < g.length && cookie < s.length) {
    if (s[cookie] >= g[child]) {
      cookie++;
      child++;
    } else {
      cookie++;
    }
  }
  return child;
}
