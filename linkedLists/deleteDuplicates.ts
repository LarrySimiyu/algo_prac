// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  // go through and when you run into a duplicate
  // make it point to the next node

  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
