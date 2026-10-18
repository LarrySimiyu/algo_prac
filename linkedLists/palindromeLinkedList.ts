/* Input: head = [1,2,2,1]
Output: true */
function isPalindrome(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  //find the middle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let current = slow;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let front = head;
  let back = prev;

  while (back) {
    if (front.val !== back.val) return false;
    front = front.next;
    back = back.next;
  } // back half is never longer and will run out first
  return true;
}
