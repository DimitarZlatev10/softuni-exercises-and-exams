function solve(array){
let initialEnergy = array.shift()
initialEnergy = Number(initialEnergy)
let wonBattles = 0

for (const line of array) {
    if(line==='End of battle'){
        console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);
        break
    }else{
        let distance = Number(line)
        if(initialEnergy-distance<0){
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
            break
        }else{
            initialEnergy-=distance
            wonBattles++

        }
    }
    if(wonBattles%3===0){
        initialEnergy+=wonBattles
    }
    
}
}
solve(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
solve(["200",
"54",
"14",
"28",
"13",
"End of battle"])
