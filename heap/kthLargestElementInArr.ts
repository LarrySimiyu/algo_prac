import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function findKthLargest(nums: number[], k: number): number {
  const pq = new MinPriorityQueue<number>();

  for (const num of nums) {
    pq.enqueue(num);

    if (pq.size() > k) pq.dequeue();
  }
  return pq.front();
}
