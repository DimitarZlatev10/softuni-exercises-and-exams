function solve(array){
let ammo = Number(array.pop())
let fuel = Number(array.pop())
let commands = array.shift().split('||')
for (let line of commands) {
    let [command,value] = line.split(' ')
    value = Number(value)
    if(command==='Titan'){
        console.log(`You have reached Titan, all passengers are safe.`);
        break
    }
    if(command==='Travel'){
        if(fuel>=value){
            fuel-=value
            console.log(`The spaceship travelled ${value} light-years.`);
        }else{
            console.log(`Mission failed.`);
            break
        }
    }else if(command==='Enemy'){
        if(ammo>=value){
            ammo-=value
            console.log(`An enemy with ${value} armour is defeated.`);
        }else if (ammo<value){
            if(fuel>=value*2){
                fuel-=value*2
                console.log(`An enemy with ${value} armour is outmaneuvered.`);
            }else {
                console.log(`Mission failed.`);
                break
            }
        }
    }else if (command==='Repair'){
        fuel+=value
        ammo+=value*2
        console.log(`Ammunitions added: ${value*2}.`);
        console.log(`Fuel added: ${value}.`);
    }
    
}
}
// solve([ 'Travel 10||Enemy 30||Repair 15||Titan', 
// '50', 
// '80' ])
solve([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ])
