function solve(array){
let initialHealth = 100
let bitcoins = 0
let dungeon = array.split('|')
let bestRoom = 0
for (const line of dungeon) {
    let [command , value] = line.split(' ')
    value = Number(value)
    if(command==='potion'){
        bestRoom++
        if(initialHealth+value>100){
         let healed = 100-initialHealth
         console.log(`You healed for ${healed} hp.`);
         initialHealth+=healed
         console.log(`Current health: ${initialHealth} hp.`);
        }else{
            initialHealth+=value
         console.log(`You healed for ${value} hp.`);
         console.log(`Current health: ${initialHealth} hp.`);
        }
    }else if (command==='chest'){
        bestRoom++
        bitcoins+=value
        console.log(`You found ${value} bitcoins.`);
    }else {
        bestRoom++
        initialHealth-=value
        if(initialHealth>0){
      console.log(`You slayed ${command}.`);
        }else{
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${bestRoom}`);
            break
        }
    }
    
}
if(initialHealth>0){
  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${initialHealth}`);
}
}
// solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")