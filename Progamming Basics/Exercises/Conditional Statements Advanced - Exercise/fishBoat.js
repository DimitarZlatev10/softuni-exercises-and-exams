function solve(input) {
  let sumForRentDuringSpring = 3000;
  let sumForRentDuringSummer = 4200;
  let sumForRentDuringAutumn = 4200;
  let sumForRentDuringWinter = 2600;
  let totalMoney = 0;

  let budgetFromTheGroup = Number(input[0]);
  let season = input[1];
  let numberOfFishers = Number(input[2]);

  switch (season) {
    case "Winter":
      totalMoney = sumForRentDuringWinter;
      break;
    case "Spring":
      totalMoney = sumForRentDuringSpring;
      break;
    case "Summer":
      totalMoney = sumForRentDuringSummer;
      break;
    case "Autumn":
      totalMoney = sumForRentDuringAutumn;
      break;
  }
  if(numberOfFishers<=6){
      totalMoney = totalMoney *0.90
  }else if (numberOfFishers>=7&& numberOfFishers<=11){
      totalMoney  = totalMoney *0.85
  }
  else if (numberOfFishers>12){
      totalMoney = totalMoney  * 0.75
  }
  if (numberOfFishers % 2===0  && season !='Autumn'){
      totalMoney -= totalMoney* 0.05;
  }
  if(budgetFromTheGroup >= totalMoney){
      const moneyLeft = budgetFromTheGroup - totalMoney
      console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`); 
  }
else {
    const moneyNeeded = totalMoney - budgetFromTheGroup
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
}




}
solve(["3000", "Summer", "11"]);
solve(["3600", "Autumn", "6"]);
solve(["2000", "Winter", "13"]);
