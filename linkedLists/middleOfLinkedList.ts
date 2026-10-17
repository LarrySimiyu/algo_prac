const middleNode = (head: ListNode | null): ListNode | null => {
  let slow = head;
  let fast = head;

  // fast pointer that goes ahead twice as fast
  // by the time it becomes null slow should be in the middle
  // thats how we find the middle now
  while (fast && fast.next) {
    slow = slow.next; // slow trails fast so its never null inside the loop
    fast = fast.next.next;
  }
  return slow;
};
