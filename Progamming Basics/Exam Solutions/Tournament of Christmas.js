function solve(input) {
  let i = 0
  let days = input[i++]
  let day = 1 
let money = 0
let totalWins = 0
let totalMoney = 0
  while(day <=days){
      let game = input[i++]
      let win = 0
      let lose = 0
      while(game !=='Finish'){
        let result = input[i++]
        if(result =='win'){
            win++
        }else{
            lose++
        }
        game = input[i++]
      }
      money = 20 * win
      day++
      if(win>lose){
          money *= 1.1
          totalWins++
      }
      totalMoney +=money
  }
  if(totalWins > days/2){
      totalMoney *=1.2
      console.log(`You won the tournament! Total raised money: ${(totalMoney).toFixed(2)}`);
  }
  else{
      console.log(`You lost the tournament! Total raised money: ${(totalMoney).toFixed(2)}`);
  }
}

solve (["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])
