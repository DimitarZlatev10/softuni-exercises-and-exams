function solve(array) {
    let dungeon = array.split('|')
    let health = 100
    let bitCoins = 0
    let room = 0
    for (const line of dungeon) {
        let [command , amount] = line.split(' ')
        amount = Number(amount)
        if(command==='potion'){
            room++
            if(health+amount>100){
                let healed = 100-health
                health+=healed
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
                
            }else{
                console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health+amount} hp.`);
                health+=amount
            }
        }  else if (command==='chest'){
            room++
            console.log(`You found ${amount} bitcoins.`);
            bitCoins+=amount
        }else{
            room++
            health-=amount
          if(health>0){
              console.log(`You slayed ${command}.`);
          }else if (health<=0){
              console.log(`You died! Killed by ${command}.`);
              console.log(`Best room: ${room}`);
              break
          }
        }
        
    }
    if(health>0){
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitCoins}`);
        console.log(`Health: ${health}`);
    }
}
// solve("potion 100|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")