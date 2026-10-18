/* 
 Input: head = [3,2,0,-4], pos = 1
Output: true

*/
function hasCycle(head: ListNode | null): boolean {
  // use fast and slow pointers if they run into each other then
  // then a cycle exists

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}
