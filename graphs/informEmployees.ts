function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
  // reports[boss] = everyone who reports directly to boss
  const reports: number[][] = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    if (manager[i] === -1) continue; // head has no boss to be filed under
    reports[manager[i]].push(i);
  }

  // dfs(id) = minutes until everyone under id has heard
  const dfs = (id: number): number => {
    let slowest = 0;
    for (const r of reports[id]) {
      slowest = Math.max(slowest, dfs(r));
    }
    return informTime[id] + slowest; // wait for slowest of branch
  };

  return dfs(headID);
}
