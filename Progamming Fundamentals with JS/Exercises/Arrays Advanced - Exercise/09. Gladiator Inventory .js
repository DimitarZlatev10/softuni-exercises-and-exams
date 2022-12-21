function solve(array){
let inventory = array.shift().split(' ')



for (const line of array) {
    let [command , n] = line.toString().split(' ')
    let [weapon,upgrade] = n.split('-')
    let index = inventory.indexOf(weapon)
    if(command ==='Buy'){
        if(inventory.includes(weapon)){

        }else{
            inventory.push(weapon)
        }
    }else if (command==='Trash'){
        if(inventory.includes(weapon)){
            inventory.splice(index,1)
        }
    }else if (command==='Repair'){
        if(inventory.includes(weapon)){
            inventory.splice(index,1)
            inventory.push(weapon)
        }
    }else if (command==='Upgrade'){
        if(inventory.includes(weapon)){
            
            let m = `${weapon}:${upgrade}`
            inventory.splice(index+1,0,m)
        }
    }
    
}
console.log(inventory.join(' '));
}
solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Shield-V']
)