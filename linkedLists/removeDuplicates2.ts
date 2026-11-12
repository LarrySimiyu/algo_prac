function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let dummyN = new ListNode(-Infinity); // value the list can never contain
  const stack: ListNode[] = [dummyN];
  let current = head;
  while (current) {
    if (current.val === stack[stack.length - 1].val) {
      const dupVal = current.val;
      stack.pop();

      while (current && current.val === dupVal) {
        current = current.next;
      }
    } else {
      stack.push(current);
      current = current.next;
    }
  }

  for (let i = 0; i < stack.length - 1; i++) {
    stack[i].next = stack[i + 1];
  }
  stack[stack.length - 1].next = null;

  return dummyN.next;
}
