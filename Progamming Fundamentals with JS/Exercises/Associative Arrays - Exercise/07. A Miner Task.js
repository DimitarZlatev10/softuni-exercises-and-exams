function solve(array){
let resources = {}
for (let i = 0; i < array.length-1; i+=2) {
    let ore = array[i]
    let quantity = Number(array[i+1])

    if(!resources.hasOwnProperty(ore)){
        resources[ore] = quantity
    }else {
        resources[ore]+=quantity
    }
    
    
}
for (let key in resources) {
    console.log(`${key} -> ${resources[key]}`);
    
}
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    )