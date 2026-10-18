function partition(head: ListNode | null, x: number): ListNode | null {
  // dummy nodes so that our chainss have something to attach to
  // tails so that we can attach new nodes without walking through
  // original node again
  //

  let smallD = new ListNode(0);
  let bigD = new ListNode(0);

  let smallT = smallD;
  let bigT = bigD;

  let current = head;

  while (current) {
    if (current.val < x) {
      smallT.next = current;
      // attach the next node then move the tail to it
      smallT = current;
    } else {
      bigT.next = current;
      bigT = current;
    }

    current = current.next;
  }
  bigT.next = null;
  smallT.next = bigD.next;
  return smallD.next;
}
