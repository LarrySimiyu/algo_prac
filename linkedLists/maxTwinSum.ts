function pairSum(head: ListNode | null): number {
  // find the middle
  // reverse second half
  // walk through adding the sums find the highest

  let slow: ListNode = head;
  let fast: ListNode = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let secondHead = slow;

  while (secondHead) {
    const next = secondHead.next;
    secondHead.next = prev;
    prev = secondHead;
    secondHead = next;
  }
  let max = 0;
  let first = head;
  let second = prev;
  while (second) {
    max = Math.max(max, first.val + second.val);
    first = first.next;
    second = second.next;
  }
  return max;
}
