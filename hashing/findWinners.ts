/* You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.
 

Example 1:

Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8]. */

//medium
// return nested arrays. 1st should have list of players that have not lost any matches, second list of players that have lost exactly 1 match
const findWinnders = (matches: number[][]): number[][] => {
  // track the loss count
  // return array with [[no losses], [1 loss]]

  const lossCount = new Map();

  for (const [winner, loser] of matches) {
    if (!lossCount.get(winner)) lossCount.set(winner, 0);
    lossCount.set(loser, (lossCount.get(loser) ?? 0) + 1);
  }

  const noLosses: number[] = [];
  const oneLoss: number[] = [];

  for (const [player, losses] of lossCount) {
    if (losses === 0) noLosses.push(player);
    else if (losses === 1) oneLoss.push(player);
  }

  return [noLosses.sort((a, b) => a - b), oneLoss.sort((a, b) => a - b)];
};
