import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function kWeakestRows(mat: number[][], k: number): number[] {
  const heap = new MaxPriorityQueue<[number, number]>({
    compare: (a, b) => (a[0] !== b[0] ? b[0] - a[0] : b[1] - a[1]),
  });
  const rows = mat.length;
  const cols = mat[0].length;

  for (let i = 0; i < rows; i++) {
    let count = 0;
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 1) count++;
    }
    heap.enqueue([count, i]);
    if (heap.size() > k) heap.dequeue(); // kick out the strongest
  }
  const result: number[] = [];
  while (heap.size() > 0) {
    result.push(heap.dequeue()[1]); // [1] is the index, [0] is the count
  }
  return result.reverse();
}
