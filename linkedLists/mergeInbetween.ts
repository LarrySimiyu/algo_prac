function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null,
): ListNode | null {
  // walk to a get node right before it
  // walk to b get node right after it
  let before = list1;

  for (let i = 0; i < a - 1; i++) {
    before = before.next;
  }

  let after = before;
  for (let i = 0; i < b - a + 2; i++) {
    after = after!.next;
  }

  // change pointers
  before.next = list2;

  let current = list2;

  while (current.next) {
    current = current.next;
  }
  current.next = after;
  return list1;
}
