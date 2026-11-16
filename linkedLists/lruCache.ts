class DNode {
  key: number;
  val: number;
  prev: DNode | null = null;
  next: DNode | null = null;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
  }
}
class LRUCache {
  capacity: number;
  map: Map<number, DNode>;
  head: DNode;
  tail: DNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new DNode(0, 0);
    this.tail = new DNode(0, 0);

    this.head.next = this.tail; // empty line: head <-> tail
    this.tail.prev = this.head;
  }
  get(key: number): number {
    // return -1 if not in cache
    // also counts as using the key
    const node = this.map.get(key);
    if (!node) return -1;
    this.remove(node);
    this.addToEnd(node);

    return node.val;
  }

  put(key: number, value: number): void {
    // add key or update value if its already there
    // also counts as using the key
    // if using puts cache over capacity remove the least recently used
    const node = this.map.get(key);
    if (node) {
      node.val = value;
      this.remove(node);
      this.addToEnd(node);
      return;
    }

    const fresh = new DNode(key, value);
    this.addToEnd(fresh);
    this.map.set(key, fresh);

    if (this.map.size > this.capacity) {
      const oldest = this.head.next;
      this.remove(oldest);
      this.map.delete(oldest.key);
    }
  }

  remove(node: DNode): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToEnd(node: DNode): void {
    const prev = this.tail.prev;
    node.prev = prev;
    node.next = this.tail;
    prev.next - node;
    this.tail.prev = node;
  }
}
