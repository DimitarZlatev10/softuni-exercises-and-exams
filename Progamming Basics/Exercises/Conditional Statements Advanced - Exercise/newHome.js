function solve(input) {
  let priceForRose = 5;
  let priceForDahlies = 3.8;
  let priceForTulips = 2.8;
  let priceForNarcissus = 3;
  let priceForGladiolus = 2.5;

  let finalMoney = 0;
  let typeOfFlower = input[0];
  let numberOfFlowers = Number(input[1]);
  let budget = Number(input[2]);

  switch (typeOfFlower) {
    case "Roses":
      if (numberOfFlowers > 80) {
        finalMoney -= numberOfFlowers * 0.1;
      }
      finalMoney += numberOfFlowers * priceForRose 
      break;
      case 'Dahlias':
          if (numberOfFlowers>90){
              finalMoney -= numberOfFlowers* priceForDahlies * 0.15
          }
          finalMoney += numberOfFlowers *priceForDahlies
          break;
          case 'Tulips':
              if(numberOfFlowers>80){
                  finalMoney -=numberOfFlowers *priceForTulips * 0.15
              }
              finalMoney +=numberOfFlowers *priceForTulips;
              break;
              case 'Narcissus':
                  if(numberOfFlowers<120){
                      finalMoney  +=numberOfFlowers *priceForNarcissus * 0.15
                  }
                  finalMoney +=numberOfFlowers * priceForNarcissus;
                  break;
                  case 'Gladiolus':
                      if(numberOfFlowers<80){
                          finalMoney +=numberOfFlowers *priceForGladiolus*0.20
                      }
                      finalMoney +=numberOfFlowers*priceForGladiolus
                      break;
  }
  if(budget>= finalMoney){
      moneyLeft = budget - finalMoney
      console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlower} and ${moneyLeft.toFixed(2)} leva left. `);
  }
  else {
      const moneyNeeded = finalMoney - budget;
      console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
  }
  
}

solve(["Roses", "55", "250"]);
solve(["Tulips", "88", "260"]);
solve(["Narcissus", "119", "360"]);
solve(["Dahlias", "112", "460"]);

