class RecentCounter {
  private queue: number[];
  constructor() {
    this.queue = [];
  }

  ping(t: number): number {
    // add t to the back of queue
    this.queue.push(t);
    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }

    return this.queue.length;
  }
}

// t time in milli seconds
// return number of requests that happen in the range t-300,t
