const canConstruct = (ransomNote: string, magazine: string): boolean => {
  // early check if ransom note is longer than available mag letters then fail cant be remade
  if (ransomNote.length > magazine.length) return false;

  const magCount = new Map<string, number>();
  for (const char of magazine) {
    magCount.set(char, (magCount.get(char) ?? 0) + 1);
  }

  for (const letter of ransomNote) {
    const remaining = magCount.get(letter) ?? 0;
    if (remaining === 0) return false;
    magCount.set(letter, remaining - 1);
  }

  return true;
};
