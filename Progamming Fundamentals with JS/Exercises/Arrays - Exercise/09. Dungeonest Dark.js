function solve(arr){
let rooms = arr[0].split("|")
let health = 100
let coins = 0
let bestRoom = 0
for (let i = 0; i < rooms.length; i++) {
    const monPotChest = rooms[i].split(' ');
    let monsPotChest = monPotChest[0]
    let dmgHealthCoins = Number(monPotChest[1])
    if(monsPotChest==='rat'||monsPotChest==='cat'||monsPotChest==='orc'||monsPotChest==='snake'||monsPotChest==='bat'||monsPotChest==='boss'){
        health-=dmgHealthCoins
        if(health>0){
            bestRoom++
            console.log(`You slayed ${monsPotChest}.`);
        }else if(health<=0){ 
            console.log(`You died! Killed by ${monsPotChest}.`);
            bestRoom++
            console.log(`Best room: ${bestRoom}`);
            break
        }
    }else if (monsPotChest==='chest'){
        
        coins+=dmgHealthCoins
        bestRoom++
        console.log(`You found ${dmgHealthCoins} coins.`);
    }else if (monsPotChest==='potion'){
       
        if(health+dmgHealthCoins>100){
            health = 100-health
            console.log(`You healed for ${health} hp.`);
            health = 100
            console.log(`Current health: ${health} hp.`);
            bestRoom++
        }else{
            console.log(`You healed for ${dmgHealthCoins} hp.`);
            health+=dmgHealthCoins
            console.log(`Current health: ${health} hp.`);
            bestRoom++
        }
    }
}
if(health>0){
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
}
//solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])