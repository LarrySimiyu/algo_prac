function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    // change sign to point behind

    current.next = prev;
    prev = current;
    current = next;
  }
  /*   prev is now the new head */
  return prev;
}
