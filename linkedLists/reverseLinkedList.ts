const reverse = (head: ListNode | null): ListNode | null => {
  let prev: ListNode | null = null;
  let current = head;

  while (current !== null) {
    // save the next node
    const next = current.next;

    // flip currents arrow backwards
    current.next = prev;

    prev = current;
    // move current forward
    current = next;
  }

  return prev;
};
