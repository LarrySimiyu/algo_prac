/* Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer. */

function frequencySort(s: string): string {
  const counts = new Map<string, number>();

  for (const char of s) counts.set(char, (counts.get(char) ?? 0) + 1);

  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);

  let result = "";

  for (const [char, count] of sorted) result += char.repeat(count);

  return result;
}
