/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */
/* Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

const longestCommonPrefix = (strs: string[]): string => {
  // just need to check against the first word soon as any word breaks that is when
  // we exit the loop

  if (strs.length === 0) return "";

  const first = strs[0];

  // loop through the first word, while also checking the others
  for (let i = 0; i < first.length; i++) {
    // a way to check the character
    const char = first[i];
    // loop through the rest of the passed in array
    for (let j = 1; j < strs.length; j++) {
      // stop if the string ran out
      if (i >= strs[j].length || strs[j][i] !== char) {
        return first.slice(0, i);
      }
    }
  }

  // if every column matched then just return the entire first word
  return first;
};
