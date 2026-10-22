import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function kClosest(points: number[][], k: number): number[][] {
  // rank points by squared distance; max-heap so the farthest is at the front

  const pq = new MaxPriorityQueue<number[]>((p) => p[0] * p[0] + p[1] * p[1]);

  for (const point of points) {
    pq.enqueue(point);

    if (pq.size() > k) pq.dequeue();
  }
  return pq.toArray();
}
