/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

Example 1:


Input: text = "nlaebolko"
Output: 1
Example 2:



Input: text = "loonbalxballpoon"
Output: 2 */

const maxNumOfBalloons = (text: string): number => {
  // make a map to track counts
  const counts = new Map<string, number>();

  for (const char of text) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  const capacities = [
    counts.get("b") ?? 0,
    counts.get("a") ?? 0,
    counts.get("n") ?? 0,
    Math.floor((counts.get("l") ?? 0) / 2),
    Math.floor((counts.get("o") ?? 0) / 2),
  ];
  return Math.min(...capacities);
};
