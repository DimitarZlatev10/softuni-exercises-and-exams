function solve(array){
let pirateShip = array.shift().split('>').map(Number)
let warShip = array.shift().split('>').map(Number)
let maxHealthCapacity = Number(array.shift())
for (const line of array) {
    let [command , ...elements] = line.split(' ')
    if(command==='Retire'){
        let pirateShipSum = pirateShip.reduce((current,next)=> current+next,0)
        let warShipSum = warShip.reduce((current,next)=>current+next,0)
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
        break
    }if(command==='Fire'){
        let index = Number(elements[0])
        let damage = Number(elements[1])
        if(index>=0&&index<=warShip.length-1){
            warShip[index]-=damage
            if(warShip[index]<=0){
                console.log(`You won! The enemy ship has sunken.`);
                return
            }
        }
    }else if (command==='Defend'){
        let startIndex = Number(elements[0])
        let endIndex = Number(elements[1])
        let damage = Number(elements[2])
        if(startIndex>=0&&endIndex<=pirateShip.length-1)
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i]-=damage
                if(pirateShip[i]<=0){
                    console.log(`You lost! The pirate ship has sunken.`);
                    return
                }
            }
        
    }else if (command==='Repair'){
        let index = Number(elements[0])
        let repairHealth = Number(elements[1])
        if(index>=0&&index<=pirateShip.length-1){
            pirateShip[index]+=repairHealth
            if(pirateShip[index]>maxHealthCapacity){
                pirateShip[index] = maxHealthCapacity
            }
        }
    }else if (command==='Status'){
        let count = 0
        for (let i = 0; i < pirateShip.length; i++) {
            let checkingForRepair = pirateShip[i]
            let percent = maxHealthCapacity * 0.20
            if(checkingForRepair<percent){
                count++

            }
            
        }
        console.log(`${count} sections need repair.`);
    }
}

}
solve(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

