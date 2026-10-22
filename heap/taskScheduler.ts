import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function leastInterval(tasks: string[], n: number): number {
  // count number of times each task appears
  const counts = new Map<string, number>();
  for (const task of tasks) {
    counts.set(task, (counts.get(task) ?? 0) + 1);
  }

  // max heap so that tasks with most copies left is alays first
  const pq = new MaxPriorityQueue<number>();
  for (const count of counts.values()) pq.enqueue(count);

  let time = 0;

  while (pq.size() > 0) {
    //
    const leftover: number[] = [];
    let ran = 0;

    for (let i = 0; i < n + 1 && pq.size() > 0; i++) {
      const count = pq.dequeue()! - 1;
      if (count > 0) leftover.push(count);
      ran++;
    }

    for (const count of leftover) pq.enqueue(count);

    time += pq.size() > 0 ? n + 1 : ran;
  }
  return time;
}
