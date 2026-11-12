import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const pq = new MinPriorityQueue<ListNode>({
    // smallest val comes out first
    compare: (a, b) => a.val - b.val,
  });
  const dn: ListNode = new ListNode(0);
  let tail: ListNode = dn;

  for (const head of lists) {
    // a null entry is an empty list, nothing to add
    if (head) {
      pq.enqueue(head);
    }
  }
  while (pq.size() > 0) {
    // gettting the smallest from the list
    const node = pq.dequeue();
    tail.next = node;
    tail = tail.next;

    if (node.next) {
      pq.enqueue(node.next);
    }
  }
  return dn.next;
}
