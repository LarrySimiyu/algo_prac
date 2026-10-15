/* Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

*/
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  // looking at the current value in nums1 find it in nums2
  // then note the element next to it if its greater
  // if its not or does not exist then put -1
  // add these to a new array
  const numsMap = new Map<number, number>(); // value → index in nums2, so we can jump straight to it
  const answer: number[] = [];

  for (let j = 0; j < nums2.length; j++) {
    numsMap.set(nums2[j], j);
  }

  // loop through the first array
  for (let i = 0; i < nums1.length; i++) {
    const index = numsMap.get(nums1[i])!;

    let greater = -1; // default if nothing bigger shows up

    // loop through right until a greater number shows up

    for (let k = index + 1; k < nums2.length; k++) {
      if (nums2[k] > nums1[i]) {
        greater = nums2[k];
        break; // break the loop the first find of the NEXT BIG NUMBER so the others wouldnt overwrite it
      }
    }

    answer.push(greater);
  }

  return answer;
}
