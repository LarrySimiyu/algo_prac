function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummyN = new ListNode(0);
  let tail = dummyN;

  let carry = 0;
  while (l1 || l2 || carry) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;

    // ones digit goes into the new node
    const digit = sum % 10;

    carry = Math.floor(sum / 10);

    tail.next = new ListNode(digit);

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
    tail = tail.next;
  }

  return dummyN.next;
}
