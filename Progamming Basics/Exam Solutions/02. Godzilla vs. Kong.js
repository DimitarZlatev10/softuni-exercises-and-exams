function solve(input) {
  let budgetOfFilm = Number(input[0]);
  let countOfStatists = Number(input[1]);
  let priceForOneDress = Number(input[2]);

  let priceForDecor = budgetOfFilm * 0.1;
  let priceForDresses = countOfStatists * priceForOneDress;
  if (countOfStatists > 150) {
    priceForDresses = priceForDresses - priceForDresses * 0.1;
  }
  let totalPriceForFilm = priceForDecor + priceForDresses;
  
  if (totalPriceForFilm<=budgetOfFilm) {
    let remainingMoney = (budgetOfFilm - totalPriceForFilm);
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${remainingMoney.toFixed(2)} leva left.`
    );
  } else {
    let remainingMoney = ( totalPriceForFilm-budgetOfFilm );
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${remainingMoney.toFixed(2)} leva more.`);
  }
}
//solve(["20000", "120", "55.5"]);
//solve(["15437.62", "186", "57.99"]);
solve(["9587.88", "222", "55.68"]);
