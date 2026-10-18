function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let prev = dummy;

  while (prev.next && prev.next.next) {
    const first = prev.next;
    const second = prev.next.next;

    prev.next = second;
    second.next = first;
    first.next = second.next;

    prev = first;
  }

  return dummy.next;
}
