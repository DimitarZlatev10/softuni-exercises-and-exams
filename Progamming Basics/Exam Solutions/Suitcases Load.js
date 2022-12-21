function solve(input) {
  let totalCapacity = Number(input[0]);
  let index = 1;
  let comand = input[index];

  let totalLoaded = 0;
  while (comand !== "End") {
    comand = Number(input[index]);
    totalLoaded++;
    if (totalLoaded % 3 == 0) {
      comand = comand + comand * 0.1;
    }
    if (totalCapacity - comand < 0) {
      break;
    }

    totalCapacity -= comand;

    index++;

    comand = input[index];
  }
  if (comand == "End") {
    console.log(`Congratulations! All suitcases are loaded!`);
    console.log(`Statistic: ${totalLoaded} suitcases loaded.`);
  } else {
    console.log(`No more space!`);
    console.log(`Statistic: ${totalLoaded - 1} suitcases loaded.`);
  }
}
solve(["550", "100", "252", "72", "End"]);
solve(["700.5", "180", "340.6", "126", "220"]);
solve(["1200.2", "260", "380.5", "125.6", "305", "End"]);
// if (totalCapacity <= 0) {
//   console.log(`No more space!`);
//   console.log(`Statistic: ${totalLoaded} suitcases loaded.`);
//   break;
// }
