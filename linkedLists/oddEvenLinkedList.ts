const oddEvenList = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head; // 0 or 1 node: nothing to reorder

  let odd: ListNode = head;
  let even: ListNode | null = head.next;
  const evenHead = even; // save even chain's start; we glue odd's tail to it at the end

  while (even && even.next) {
    odd.next = even.next; // REWIRE: odd's arrow skips the even node, lands on next odd
    odd = odd.next; // MOVE: step odd onto that next odd node
    even.next = odd.next; // REWIRE: even's arrow skips the odd node odd just landed on
    even = even.next; // MOVE: step even onto that next even node
  }

  odd.next = evenHead; // glue: last odd → first even
  return head; // first node is odd, so head never changes
};
