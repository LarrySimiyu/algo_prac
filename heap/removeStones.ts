import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
function minStoneSum(piles: number[], k: number): number {
  const pq = new MaxPriorityQueue<number>();
  let total = 0;
  for (const p of piles) {
    pq.enqueue(p);
    total += p;
  }
  for (let i = 0; i < k; i++) {
    const biggest = pq.dequeue();

    const removed = Math.floor(biggest / 2);
    total -= removed;
    pq.enqueue(biggest - removed);
  }
  return total;
}
