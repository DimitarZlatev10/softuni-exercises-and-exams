function solve(array){
let neededXP = Number(array.shift())
let countOfBattles = Number(array.shift())
let battlesCount = 0
let totalXP = 0
for (let i = 0; i <countOfBattles; i++) {
    battlesCount++
    if(battlesCount%3===0&&battlesCount!=0){
        totalXP+= (array[i] + (array[i]*0.15))
    }else if (battlesCount%5===0&&battlesCount!=0){
        totalXP+= (array[i] - (array[i]*0.10))
    }else if(battlesCount%15===0&&battlesCount!=0){
        totalXP+= (array[i] + (array[i]*0.5))
    }else{
    totalXP+=array[i]
    }
    if(totalXP>=neededXP){
        break
    }
    
}
if(totalXP>=neededXP){
    console.log(`Player successfully collected his needed experience for ${battlesCount} battles.`);
}else{
    neededXP-=totalXP
    console.log(`Player was not able to collect the needed experience, ${neededXP.toFixed(2)} more needed.`);
}
}
// solve([500,
//     5,
//     50,
//     100,
//     200,
//     100,
//     30])
    solve([500,
        5,
        50,
        100,
        200,
        100,
        20])
        