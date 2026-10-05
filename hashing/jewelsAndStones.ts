/* jewels and stones

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3 */

const jewelsAndStones = (jewels: string, stones: string): number => {
  // create a map of stones with their count. parse through jewels and see how many there are in stones

  let runningCount = 0;

  const stoneMap = new Map<string, number>();

  for (const char of stones) {
    stoneMap.set(char, (stoneMap.get(char) ?? 0) + 1);
  }

  for (const j of jewels) {
    runningCount += stoneMap.get(j) ?? 0;
  }
  return runningCount;
};
