function swapNodes(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;

  let length = 0;
  let curr: ListNode | null = head;

  while (curr) {
    curr = curr.next;
    length++;
  }

  let front = head;

  for (let i = 0; i < k - 1; i++) {
    front = front.next!;
  }

  let back = head;
  for (let i = 0; i < length - k; i++) {
    back = back.next!;
  }
  [front.val, back.val] = [back.val, front.val];

  return head;
}
