/* 
   Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  sort each word you come by
  when sorted use that as the key 
  the values should be arrays 
  * */
function groupAnagrams(strs: string[]): string[][] {
  const letterSort = (s: string): string => {
    return s.split("").sort().join("");
  };

  const groupedWords = new Map<string, string[]>();

  for (const word of strs) {
    const sorted = letterSort(word);

    if (!groupedWords.has(sorted)) groupedWords.set(sorted, []);
    groupedWords.get(sorted)!.push(word);
  }

  return [...groupedWords.values()];
}
