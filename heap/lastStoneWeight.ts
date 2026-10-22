import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
function lastStoneWeight(stones: number[]): number {
  const pq = new MaxPriorityQueue<number>();
  stones.forEach((s) => pq.enqueue(s));

  while (pq.size() > 1) {
    const y = pq.dequeue();
    const x = pq.dequeue();

    if (y !== x) pq.enqueue(y - x);
  }

  return pq.size() === 0 ? 0 : pq.dequeue();
}
