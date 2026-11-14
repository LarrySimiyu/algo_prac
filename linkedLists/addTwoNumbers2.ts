function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // two stacks to add from the back
  // carry amount
  // new linked list
  const stack1: ListNode[] = [];
  const stack2: ListNode[] = [];
  let head: ListNode | null = null;
  let carry: number = 0;

  let list1 = l1;
  let list2 = l2;

  while (list1) {
    stack1.push(list1);
    list1 = list1.next;
  }
  while (list2) {
    stack2.push(list2);
    list2 = list2.next;
  }
  // stacks are different sizes
  while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
    const val1 = stack1[stack1.length - 1] ? stack1.pop().val : 0;
    const val2 = stack2[stack2.length - 1] ? stack2.pop().val : 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const newNode = new ListNode(sum % 10);
    newNode.next = head;
    head = newNode;
  }

  return head;
}
