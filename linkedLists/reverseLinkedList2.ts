// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.
//
//Input: head = [1,2,3,4,5], left = 2, right = 4
//Output: [1, 4, 3, 2, 5];
//
// Input: head = [5], left = 1, right = 1
// Output: [5]
//
// cut the middle section out, reverse it with a loop then stitch it back in.

const reverser = (head: ListNode | null): ListNode | null => {
  // place a fake node infront of the linked list so that every real node has a node before
  // even if there is only 1
  // dummy → 1 → 2 → 3 → 4 → 5
  const dummy = new ListNode(0, head);

  // walk through the node before the section
  let before: ListNode = dummy;
  for (let i = 1; i < left; i++) {
    before = before.next!;
  }

  // remember first node of the section.
  // after reversing it becomes the last node and will need to connect to whatever
  // comes after the secion
  const sectionStart = before.next!;

  // reverse just the section

  let prev: ListNode | null = null;
  let current: ListNode | null = sectionStart;

  for (let i = 0; i < right - left + 1; i++) {
    const next: ListNode | null = current!.next;
    current!.next = prev;
    prev = current;
    current = next;
  }

  // stitch reversed section back into the list
  before.next = prev;
  sectionStart.next = current;

  return dummy.next;
};
