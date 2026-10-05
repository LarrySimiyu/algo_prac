const middleNode = (head: ListNode | null): ListNode | null => {
  // count nodes
  let count = 0;
  let current = head; // pointer for walking down the list

  while (current !== null) {
    count++;
    current = current.next;
  }

  // find middle
  let middle = Math.floor(count / 2);
  current = head;

  // go to the middle with a pointer and get the value
  for (let i = 0; i < middle; i++) {
    current = current.next;
  }

  return current;
};
