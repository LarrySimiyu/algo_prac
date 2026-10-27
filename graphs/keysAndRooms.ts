function canVisitAllRooms(rooms: number[][]): boolean {
  // rooms that have been visited
  const visited = new Set<number>();

  const dfs = (room: number): void => {
    // already explored this room, going again finds nothing new
    if (visited.has(room)) return;

    visited.add(room);

    for (const key of rooms[room]) {
      dfs(key);
    }
  };

  dfs(0);

  // every room is reachable only if we entered all of them
  return visited.size === rooms.length;
}
