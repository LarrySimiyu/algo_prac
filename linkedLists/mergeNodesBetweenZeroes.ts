function mergeNodes(head: ListNode | null): ListNode | null {
  // make a new list
  let dummyN: ListNode | null = new ListNode(0);
  let tail: ListNode = dummyN;

  let curr = head!.next;

  let sum = 0;
  while (curr) {
    if (curr.val !== 0) {
      sum += curr.val;
      curr = curr.next;
    } else {
      const node = new ListNode(sum);
      tail.next = node;
      tail = tail.next;
      sum = 0;
      curr = curr.next;
    }
  }

  return dummyN.next;
}
