function solve(array) {
    let collectedItems = array.shift().split(', ')
    for (const line of array) {
        let [command,item] = line.split(' - ')
    
        if(command=='Craft!'){
            console.log(collectedItems.join(', '));
            break
        }
        if(command=='Collect'){
            if(!collectedItems.includes(item)){
                collectedItems.push(item)
            }
        }else if (command=='Drop'){
            if(collectedItems.includes(item)){
                let itemIndex = collectedItems.indexOf(item)
                collectedItems.splice(itemIndex,1)
            }
        }else if (command==='Combine Items'){
            let [oldItem,newItem] = item.split(':')
            if(collectedItems.includes(oldItem)){
                let oldItemIndex = collectedItems.indexOf(oldItem)
                collectedItems.splice(oldItemIndex+1,0,newItem)
            }
        }else if (command==='Renew'){
            if(collectedItems.includes(item)){
                itemIndex = collectedItems.indexOf(item)
                collectedItems.splice(itemIndex,1)
                collectedItems.push(item)
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