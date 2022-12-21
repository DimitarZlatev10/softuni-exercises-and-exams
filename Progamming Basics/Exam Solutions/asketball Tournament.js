function solve(input) {
  let setGoal = Number(input[0]) - 30;
  let goal = Number(input[0]);
  let n = input.length - 1;
  let index = 1;
  let jump = input[index];
  let failCount = 0;
  let jumpCount = 0;
  for (i = 1; i <= n; i++) {
    jump = Number(input[index]);
    if (jump > setGoal) {
      setGoal += 5;
      failCount = 0;
      if (jump > goal) {
        jumpCount++;
        console.log(
          `Tihomir succeeded, he jumped over ${goal}cm after ${jumpCount} jumps.`
        );
        return;
      }
    } else {
      failCount++;

      if (failCount == 3) {
        jumpCount++;
        if (failCount == 3) {
          console.log(
            `Tihomir failed at ${setGoal}cm after ${jumpCount} jumps.`
          );
        }
        return;
      }
    }
    jumpCount++;
    jump = Number(input[index]);
    index++;
  }
}
solve(["231", "205", "212", "213", "228", "229", "230", "235"]);
solve(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
