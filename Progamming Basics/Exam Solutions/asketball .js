function solve(input) {
    let jumpHeightWanted = +input.shift();
    let jumpHeight = +input.shift();
    let firstJump = jumpHeightWanted - 30;
    let numJumps = 1;
    let failJumps = 0;
    while (true) {
        if (jumpHeight > firstJump) {
            if (firstJump >= jumpHeightWanted) {
                console.log(`Tihomir succeeded, he jumped over ${jumpHeightWanted}cm after ${numJumps} jumps.`);
                return;
            }
            firstJump += 5;
            failJumps = 0;
        } else {
            failJumps++;
            if (failJumps == 3) {
                console.log(`Tihomir failed at ${firstJump}cm after ${numJumps} jumps.`);
                return;
            }
        }
        jumpHeight = +input.shift();
        numJumps++;
    }
}
 solve(["231", "205", "212", "213", "228", "229", "230", "235"]);
solve(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);