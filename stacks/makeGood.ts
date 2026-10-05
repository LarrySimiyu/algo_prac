/* Given a string s of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints. */
const makeGood = (s: string): string => {
  // bad pair same letter different cases
  /* Lowercase then uppercase: aA, bB, zZ
Uppercase then lowercase: Aa, Bb, Zz */
  const stack: string[] = [];

  for (const char of s) {
    // the most recent kept letter
    const top = stack[stack.length - 1];

    // bad pair, something to compare,different characters, same letter
    if (top !== undefined && top !== char && top.toLowerCase() === char.toLowerCase()) {
      stack.pop();
    } else {
      // no pair keep it
      stack.push(char);
    }
  }
  return stack.join("");
};
