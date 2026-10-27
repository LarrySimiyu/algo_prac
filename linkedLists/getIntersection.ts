function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  // walk each list get the length

  // find the difference so they have the same starting points
  const getLength = (head: ListNode | null): number => {
    let length = 0;
    let curr = head;

    while (curr) {
      length++;
      curr = curr.next;
    }
    return length;
  };

  let lenA = getLength(headA);
  let lenB = getLength(headB);

  let a = headA;
  let b = headB;

  while (lenA > lenB) {
    a = a!.next;
    lenA--;
  }

  while (lenB > lenA) {
    b = b!.next;
    lenB--;
  }

  while (a !== b) {
    a = a!.next;
    b = b!.next;
  }

  return a;
}
