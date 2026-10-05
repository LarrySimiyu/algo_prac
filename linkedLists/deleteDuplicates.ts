// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next; // skip the duplicate
    } else {
      current = current.next;
    }
  }
  return head;
};
