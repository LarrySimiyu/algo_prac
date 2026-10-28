function rotateRight(head: ListNode | null, k: number): ListNode | null {
  // find the length
  // find last node and make it point to the head
  // will then make a cut

  // nothing to rotate

  if (!head || !head.next) return head;
  let tail = head;
  let len = 1;

  // len start at 1 because loop doesnt account for the head
  while (tail.next) {
    len++;
    tail = tail.next;
  }

  // if there was a full rotation nothing would change so only account for left overs
  k = k % len;

  if (k === 0) return head;

  // close the circle
  tail.next = head;

  let newTail = head;

  for (let i = 0; i < len - k - 1; i++) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
}
