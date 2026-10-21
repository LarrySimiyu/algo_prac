function isPowerOfTwo(n: number): boolean {
  /*   An integer n is a power of two, if there exists an integer x such that n == 2x. */
  if (n === 1) return true;
  // no negative or odd numbers
  if (n <= 0 || n % 2 !== 0) return false;

  return isPowerOfTwo(n / 2);
}
