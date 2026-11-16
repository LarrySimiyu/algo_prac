function flatten(head: _Node | null): _Node | null {
  let curr = head;

  while (curr) {
    if (curr.child) {
      const next = curr.next;
      curr.next = curr.child;
      curr.child.prev = curr;

      let tail = curr.child;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = next;
      if (next) next.prev = tail;
      curr.child = null;
    }
    curr = curr.next;
  }
  return head;
}
