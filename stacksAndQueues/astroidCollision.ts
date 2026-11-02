function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = []; // astroids that have not been destroyed yet

  for (const a of asteroids) {
    let alive = true;

    while (alive && stack.length > 0 && stack[stack.length - 1] > 0 && a < 0) {
      const top = stack[stack.length - 1];

      if (Math.abs(top) < Math.abs(a)) {
        stack.pop();
      } else if (Math.abs(top) === Math.abs(a)) {
        stack.pop();
        alive = false;
      } else {
        alive = false; // a dies, top survives
      }
    }

    if (alive) stack.push(a);
  }
  return stack;
}
