class BrowserHistory {
  private backStack: string[] = [];
  private forwardStack: string[] = [];
  private current: string;
  constructor(homepage: string) {
    this.forwardStack = [];
    this.backStack = [];
    this.current = homepage;
  }

  visit(url: string): void {
    this.backStack.push(this.current);
    this.current = url;
    this.forwardStack = [];
  }

  back(steps: number): string {
    while (steps > 0 && this.backStack.length > 0) {
      this.forwardStack.push(this.current);
      this.current = this.backStack.pop();
      steps--;
    }
    return this.current;
  }

  forward(steps: number): string {
    while (steps > 0 && this.forwardStack.length > 0) {
      this.backStack.push(this.current);
      this.current = this.forwardStack.pop();
      steps--;
    }
    return this.current;
  }
}
