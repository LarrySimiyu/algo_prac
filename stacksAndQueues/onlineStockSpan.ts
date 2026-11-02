class StockSpanner {
  private stack: [number, number][]; // [price, span] — popped days get folded into the span

  constructor() {
    this.stack = [];
  }
  next(price: number): number {
    let span = 1; // todays count

    this.stack.push([price, span]);

    while (this.sta) return span;
  }
}
