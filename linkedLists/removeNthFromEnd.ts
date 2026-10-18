/* Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5] */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // slow and fast pointers
  // slow is the node that is n + 1 steps from the end so we can delete the node
  // ahead of it which would be n

  // give slow a node to stand on (dummy) incase the node that needs to be deleted
  // is the head
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;

  // move fast pointer n + 1 ahead
  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // make the pointer skip its original node and point to the one after
  slow.next = slow.next.next;
  return dummy.next;
}
