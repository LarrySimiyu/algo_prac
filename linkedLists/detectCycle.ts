function detectCycle(head: ListNode | null): ListNode | null {
  // slow and fast pointer
  // fast goes ahead by 2
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let start = head;
      while (start !== slow) {
        start = start!.next;
        slow = slow!.next;
      }
      return start;
    }
  }
  return null;
}
