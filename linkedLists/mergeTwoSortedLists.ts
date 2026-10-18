function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let dummyN = new ListNode(0);
  let tail = dummyN;

  let currentOne = list1;
  let currentTwo = list2;

  while (currentOne && currentTwo) {
    if (currentOne.val <= currentTwo.val) {
      tail.next = currentOne;
      currentOne = currentOne.next;
    } else {
      tail.next = currentTwo;
      currentTwo = currentTwo.next;
    }

    tail = tail.next; // move the tail to the newly attached node
  }
  tail.next = currentOne ?? currentTwo;
  return dummyN.next;
}
