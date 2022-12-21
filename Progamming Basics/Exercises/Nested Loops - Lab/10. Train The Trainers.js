function solve(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;
  let comand = input[index];
  index++;
  let count = 0;
  let avgGrade = 0;

  while (comand != "Finish") {
    count++;
    let presentName = comand;
    let tempAvgGrade = 0;
    for (let i = 0; i < n; i++) {
        let tempGrade = Number(input[index])
        index++
        tempAvgGrade +=tempGrade
    }
    tempAvgGrade = tempAvgGrade / n
    let firstResult = `${presentName} - ${tempAvgGrade.toFixed(2)}.`
    console.log(firstResult);
    avgGrade+=tempAvgGrade
    comand = input[index]
    index++
  }
  avgGrade /= count
  let finalResult = `Student's final assessment is ${avgGrade.toFixed(2)}.`
  console.log(finalResult);
}
solve([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
