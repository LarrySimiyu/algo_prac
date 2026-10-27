function reorderList(head: ListNode | null): void {
  if (!head) return;
  let slow = head;
  let fast = head;

  //
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // save second head as curr
  let curr = slow.next;
  slow.next = null;
  let prev = null;

  // reverse second half
  while (curr) {
    // save next before we switch so we dont lose it
    const next = curr.next;
    curr.next = prev; // make pointer point to prev
    // move everything up
    prev = curr;
    curr = next;
  }

  let first = head;
  let second = prev;

  while (second) {
    const nextFirst = first.next;
    const nextSecond = second.next;

    first.next = second;
    second.next = nextFirst;

    first = nextFirst;
    second = nextSecond;
  }
}
