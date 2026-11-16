function getDecimalValue(head: ListNode | null): number {
  let curr = head;
  let total = 0;

  while (curr) {
    total = total * 2 + curr.val;
    curr = curr.next;
  }

  return total;
}
