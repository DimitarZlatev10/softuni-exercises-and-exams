function solve(input){

    let oneBitcoin = 11949.16 
    let oneGold = 67.51 
    let a = 0
    let sum = 0
    let bitcoin = 0
    let day = 1
    let purchased
    for(i=1;i<=input[a];i++){
        if(sum>=oneBitcoin){
          purchased=day
          bitcoin++
          sum-=oneBitcoin
        }
        if(i===input[a]){
            a++
            day++
        }
        sum+=oneGold
        if(input[a]===input.length){
            break
        }
    }

}
solve([100,200,300])