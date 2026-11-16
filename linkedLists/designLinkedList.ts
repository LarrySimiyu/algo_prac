// doubly node
class DNode {
  val: number;
  prev: DNode | null = null;
  next: DNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

class MyLinkedList {
  head: DNode;
  tail: DNode;
  size: number; // can track bad indexes

  constructor() {
    this.head = new DNode(0);
    this.tail = new DNode(0);
    this.size = 0;

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(index: number): number {
    if (index >= this.size || index < 0) return -1;
    let curr = this.head.next;
    for (let i = 0; i < index; i++) {
      curr = curr.next!;
    }

    return curr.val;
  }

  addAtHead(val: number): void {
    const next = this.head.next;
    const node = new DNode(val);
    node.prev = this.head;

    node.next = next;
    this.head.next = node;
    next.prev = node;

    this.size++;
  }

  addAtTail(val: number): void {
    const node = new DNode(val);
    const prev = this.tail.prev;

    // learn left neighbor and right neighbor then change old pointers
    node.prev = prev;
    node.next = this.tail;
    prev.next = node;
    this.tail.prev = node;

    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) return; // past the end would leave a gap
    // new node goes infront of node at given index
    let curr = this.head.next;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    const node = new DNode(val);

    const prev = curr.prev;
    node.prev = prev;
    node.next = curr;
    prev.next = node;
    curr.prev = node;

    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;

    let curr = this.head.next!;
    for (let i = 0; i < index; i++) {
      curr = curr.next!;
    }

    curr.prev!.next = curr.next;
    curr.next!.prev = curr.prev;

    this.size--;
  }
}
