class MinStack {
  private allStack: number[] = [];
  private minStack: number[] = [];

  push(value: number): void {
    this.allStack.push(value);

    // <= so duplicate mins are tracked, otherwise popping one would lose the min
    if (this.minStack.length === 0 || value <= this.getMin()) {
      this.minStack.push(value);
    }
  }

  pop(): void {
    const removed = this.allStack.pop();

    // only drop from minStack when the value leaving is the current min
    if (removed === this.getMin()) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.allStack[this.allStack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
