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
  // dummy node incase reversal starts at the first node
  const dummy: ListNode = new ListNode(0, head);

  // walk to node before the section start
  let before: ListNode = dummy;
  for (let i = 1; i < left; i++) {
    before = before.next;
  }

  const sectionStart = before.next;

  let prev = null;
  let curr = sectionStart;

  for (let i = 0; i < right - left + 1; i++) {
    // save the next before we lose it
    const next = curr!.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  // stich reversed section back to the list
  before.next = prev;
  sectionStart.next = curr;
  return dummy.next;
};
