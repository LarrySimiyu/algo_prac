function removeElements(head: ListNode | null, val: number): ListNode | null {
  // dummy node incase head might be deleted

  let dn = new ListNode(0);
  let tail = dn;
  let current = head;

  while (current) {
    if (current.val !== val) {
      tail.next = current;
      tail = current;
    }
    current = current.next;
  }
  tail.next = null;
  return dn.next;
}
