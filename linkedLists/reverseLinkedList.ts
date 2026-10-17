function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next; // save so we dont lose it
    current.next = prev; // take the current pointer and point it to prev
    prev = current;
    current = next;
  }
  return prev;
}
