function solve(array){
    let energy = array.shift()
    let count = 0
    let wonBattles = 0
    for (const line of array) {
        
        if(line==='End of battle'){
            console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
            break
        }else {
           let distance = Number(line)
            if (energy-distance<0){
                console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
                break
            }
            else if (energy>=0){
                energy-=distance
                wonBattles++
                count++
                if(count===3){
                    energy+=wonBattles
                    count = 0 
                }
            }
        }

    }

}
solve((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"74",
"10"])
)
// solve((["200",
// "54",
// "14",
// "28",
// "13",
// "End of battle"])
// )