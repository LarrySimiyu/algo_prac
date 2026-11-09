function removeNodes(head: ListNode | null): ListNode | null {
  // if node to the right is greater then remove current node
  if (!head) return null;
  let stack: ListNode[] = [];
  let current = head;

  while (current) {
    // check if current value (the right) is greater than the last
    while (stack.length > 0 && current.val > stack[stack.length - 1].val) {
      stack.pop();
    }

    stack.push(current);
    current = current.next;
  }

  // reconnect stack
  for (let i = 0; i < stack.length; i++) {
    stack[i].next = stack[i + 1];
  }

  // make new tail
  stack[stack.length - 1].next = null;

  return stack[0];
}
