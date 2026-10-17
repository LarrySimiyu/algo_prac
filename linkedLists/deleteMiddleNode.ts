function deleteMiddle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // found the middle now have prev point to the node after it
  prev!.next = slow.next;

  return head;
}
