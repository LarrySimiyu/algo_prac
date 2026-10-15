function isAnagram(s: string, t: string): boolean {
  /*
   check if strings have the same length first 
   create maps that count how many times a letter has appeared
   check the maps against each other
   */

  if (s.length !== t.length) return false;

  const firstMap = new Map<string, number>();

  for (const char of s) {
    firstMap.set(char, (firstMap.get(char) ?? 0) + 1);
  }

  // subtract the counts after adding to the map
  // if they are the same then after subtracting loop they should all turn to 0

  for (const char of t) {
    const nextCount = (firstMap.get(char) ?? 0) - 1;
    if (nextCount < 0) return false;
    firstMap.set(char, nextCount);
  }

  // if no negative ever happens that means that it is an anagram
  return true;
}
