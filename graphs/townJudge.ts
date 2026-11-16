function findJudge(n: number, trust: number[][]): number {
  // find the one person everyone else trusts and who trusts nobody.
  // return their label or -1 if there isnt one
  const trustsCount: number[] = new Array(n + 1).fill(0);
  const trustedByCount: number[] = new Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trustsCount[a] += 1;
    trustedByCount[b] += 1;
  }

  for (let p = 1; p <= n; p++) {
    // judge trusts nobody and is trusted by everyone else
    if (trustsCount[p] === 0 && trustedByCount[p] === n - 1) return p;
  }

  // nobody passed both rules
  return -1;
}
