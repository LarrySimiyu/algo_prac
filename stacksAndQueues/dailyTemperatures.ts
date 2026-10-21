function dailyTemperatures(temperatures: number[]): number[] {
  const answers: number[] = new Array(temperatures.length).fill(0);
  const waitingStack: number[] = [];
  // keep track of the waiting temperature index until you find the index of the
  // greater temp

  for (let i = 0; i < temperatures.length; i++) {
    // while condition is essentially peeking to see that index
    while (
      waitingStack.length &&
      temperatures[i] > temperatures[waitingStack[waitingStack.length - 1]]
    ) {
      const j = waitingStack.pop();
      answers[j] = i - j;
    }
    waitingStack.push(i);
  }
  return answers;
}
