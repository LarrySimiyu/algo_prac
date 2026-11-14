import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function maxKelements(nums: number[], k: number): number {
  const pq = new MaxPriorityQueue<number>();
  nums.forEach((num) => pq.enqueue(num));
  let score: number = 0;

  for (let i = 0; i < k; i++) {
    const curr = pq.dequeue();
    score += curr;
    const shrunk = Math.ceil(curr / 3);
    pq.enqueue(shrunk);
  }
  return score;
}
