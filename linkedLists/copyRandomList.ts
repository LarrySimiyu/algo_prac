function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null; // nothing to copy

  const map = new Map<_Node, _Node>();
  let current = head;

  while (current) {
    const copyN = new _Node(current.val);
    map.set(current, copyN);
    current = current.next;
  }

  current = head;

  while (current) {
    const copyN = map.get(current);
    copyN.next = map.get(current.next!) ?? null;
    copyN.random = map.get(current.random!) ?? null;
    current = current.next;
  }

  return map.get(head);
}
