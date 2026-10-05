/* A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet. */

//easy
// check if each letter was found atleast once
// check if number of found letters is equal to length of alphabet
//
//
const checkIfPanagram = (sentence: string): boolean => new Set(sentence).size === 26;
