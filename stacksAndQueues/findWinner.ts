function findTheWinner(n: number, k: number): number {
  /*   add friends to queue, keep getting rid of every k friend until we are left with 1 friend  */
  const queue: number[] = [];
  for (let i = 1; i <= n; i++) queue.push(i);

  while (queue.length > 1) {
    // skip the one infront of it
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }

  return queue[0];
}
