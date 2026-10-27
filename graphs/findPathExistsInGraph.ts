const validPath = (n: number, edges: number[][], source: number, destination: number): boolean => {
  const neighbors = new Map<number, number[]>();

  // every city starts with no neighbors, including ones with no roads
  for (let city = 0; city < n; city++) {
    neighbors.set(city, []);
  }

  for (const [a, b] of edges) {
    // roads go both ways, so each city lists the other
    neighbors.get(a)!.push(b);
    neighbors.get(b)!.push(a);
  }

  // cities already explored, so roads back don't loop forever
  const visited = new Set<number>();

  const dfs = (city: number): boolean => {
    if (city === destination) return true;
    if (visited.has(city)) return false;

    visited.add(city);

    for (const next of neighbors.get(city)!) {
      // a path found from any neighbor is a path from here too
      if (dfs(next)) return true;
    }

    // every road from here was a dead end
    return false;
  };

  return dfs(source);
};
