function solve(input) {
  let balance = 0;
  let i = 0;
  let data = input[i];

  while (data !== "NoMoreMoney") {
    let sum = Number(data);
    if (sum < 0) {
      console.log(`Invalid operation!`);
      break;
    }
    balance +=sum
    console.log(`Increase: ${sum.toFixed(2)}`);
    i++;
    data=input[i]
  }
  console.log(`Total: ${balance.toFixed(2)}`);
}
solve(["5.51", "69.42", "100", "NoMoreMoney"]);
