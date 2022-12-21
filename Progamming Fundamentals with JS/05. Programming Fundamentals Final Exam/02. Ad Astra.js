function solve(input) {
  let regEx =
    /([\#|\|])([A-Z a-z]+)\1([0-9]{2}\/[0-9]{2}\/[0-9]{2})\1([0-9]+)\1/g;
  let ingredients = [];
  let isValid;
  let totalCalories = 0;
  while ((isValid = regEx.exec(input))) {
    ingredients.push(isValid);
    totalCalories += Number(isValid[4]);
  }
  let days = 0;
  while (totalCalories >= 2000) {
    days++;
    totalCalories -= 2000;
  }
  console.log(`You have food to last you for: ${days} days!`);

  for (let line of ingredients) {
    console.log(
      `Item: ${line[2]}, Best before: ${line[3]}, Nutrition: ${line[4]}`
    );
  }
}
solve([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
