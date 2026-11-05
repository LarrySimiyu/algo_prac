function countStudents(students: number[], sandwiches: number[]): number {
  // continue until none of the students want the top sandwich in the stack
  let count = 0;

  while (students.length > 0 && count < students.length) {
    const student = students.shift();
    const sammy = sandwiches[0];

    if (student !== sammy) {
      students.push(student);
      count++;
    } else {
      sandwiches.shift();
      count = 0;
    }
  }
  return students.length;
}
