/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index. */

function firstUniqChar(s: string): number {
  // make a map then count how many times the letter shows up
  // loop again and check the map find the first number that is not greater than 1
  // return its index
  //

  const charCount = new Map<string, number>();

  for (const char of s) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) return i;
  }
  return -1;
}
