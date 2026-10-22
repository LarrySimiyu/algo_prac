import { MinPriorityQueue, MaxPriorityQueue } from "@datastructures-js/priority-queue";

// k is representing nth highest
// returning kth largest score so far not the full list
class KthLargest {
  private k: number;
  private pq = new MinPriorityQueue<number>();
  constructor(k: number, nums: number[]) {
    this.k = k;
    nums.forEach((n) => this.add(n));
  }

  add(val: number): number {
    this.pq.enqueue(val);
    // only the biggest matter; evict the smaller once we are over
    if (this.pq.size() > this.k) this.pq.dequeue();
    return this.pq.front();
  }
}
