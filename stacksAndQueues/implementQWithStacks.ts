class MyQueue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  push(x: number): void {
    this.input.push(x);
  }

  pop(): number {
    this.refill();
    return this.output.pop();
  }

  peek(): number {
    this.refill();
    return this.output[this.output.length - 1];
  }

  empty(): boolean {
    return this.input.length === 0 && this.output.length === 0;
  }

  // only pour when output is empty, otherwise new items would jump ahead of older ones

  private refill(): void {
    if (this.output.length === 0) {
      while (this.input.length) this.output.push(this.input.pop()!);
    }
  }
}
