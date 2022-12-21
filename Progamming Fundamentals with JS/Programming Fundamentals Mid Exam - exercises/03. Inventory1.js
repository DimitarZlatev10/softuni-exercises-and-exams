function solve(array){
let inventory = array.shift().split(', ')
for (const line of array) {
    let [command , noUpgradeItem] = line.split(' - ')
    
    if(command ==='Craft!'){
        console.log(inventory.join(', '));
        break
    }
    let [item , upgradeItem ] = noUpgradeItem.split(':')
    if(command==='Collect'){
        if(!inventory.includes(noUpgradeItem)){
            inventory.push(noUpgradeItem)
        }
    }else if (command==='Drop'){
        let itemIndex = inventory.indexOf(noUpgradeItem)
        if(inventory.includes(noUpgradeItem)){
            inventory.splice(itemIndex,1)
        }
    }else if(command==='Combine Items'){
        let itemIndex = inventory.indexOf(item)
        if(inventory.includes(item)){
            inventory.splice(itemIndex+1,0,upgradeItem)
        }
    }else if (command==='Renew'){
        let itemIndex = inventory.indexOf(noUpgradeItem)
        if(inventory.includes(noUpgradeItem)){
            inventory.splice(itemIndex,1)
            inventory.push(noUpgradeItem)
        }
    }
}

}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )