function solve(array){
let treasureChest = array.shift().split('|')

for (const line of array) {
    let [command , ...elements] = line.split(' ')
    if(command==='Yohoho!'){
        break
    }if(command ==='Loot'){
        for (const item of elements) {
            if(!treasureChest.includes(item)){
                treasureChest.unshift(item)
            }
        }
    }else if (command==='Drop'){
        let index = Number(elements[0])
        if(index>=0&&index<=treasureChest.length-1){
            let dropped = treasureChest.splice(index,1)
            treasureChest.push(...dropped)
        }
    }else if (command==='Steal'){
        let index = Number(elements[0])
        let stealedChest = treasureChest.slice(-index)
        treasureChest.splice(-index)
        console.log(stealedChest.join(', '));
    }
    
}
let total = treasureChest.reduce((a,treasureChest)=> a+treasureChest.length,0) / treasureChest.length
if(total>0){
    console.log(`Average treasure gain: ${total.toFixed(2)} pirate credits.`);
}else{
    console.log(`Failed treasure hunt.`);
}
}
solve((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
)