/* Given a string s, return true if a permutation of the string could form a palindrome and false otherwise.
Example 1:
Input: s = "code"
Output: false

Example 2:
Input: s = "aab"
Output: true
Example 3:

Input: s = "carerac"
Output: true */
function canPermutePalindrome(s: string): boolean {
  // make a map to keep trac of count
  // only 1 letter can have an odd count because palindrome is a mirror
  // and not every letter can have even amount of appearences
  //

  const map = new Map<string, number>();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let oddCount: number = 0;

  for (const [, freq] of map) {
    if (freq % 2 === 1) oddCount++;
  }

  return oddCount <= 1;
}
