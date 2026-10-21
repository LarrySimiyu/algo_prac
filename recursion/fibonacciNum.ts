function fib(n: number): number {
  // each number is the sum of two preceding nums
  if (n <= 1) return n;
  // any other position =  the two position before it
  return fib(n - 1) + fib(n - 2);
}
