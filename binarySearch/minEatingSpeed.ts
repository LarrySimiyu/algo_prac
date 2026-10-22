function minEatingSpeed(piles: number[], h: number): number {
  // each hour walks up to one pile and eats  k bananas from the pile
  // if the pile has lesss than k bananas she eats all of them instead
  // and will not eat anymore bananas during the hour
  // return minimum integer k so that she can eat all bananas within h hours
  //
  //range of possible speeds
  let left = 1;
  // take the biggest pile in piles to represent max bananas that can be eaten
  // per hour
  let right = Math.max(...piles);

  while (left <= right) {
    // represent current speed being tested this round
    const mid = Math.floor((left + right) / 2);

    // total hours taken to finish every pile at this speed
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours <= h) {
      // fast enough, see if slower speed can work
      right = mid - 1;
    } else {
      // too slow need faster speed
      left = mid + 1;
    }
  }
  // left ends on the slowest speed that works
  return left;
}
