function solve(array){
let assocArr = {}
for (let line of array) {
    let tokens = line.split(' ')
    let product = tokens[0]
    let value = Number(tokens[1])
    if(assocArr.hasOwnProperty(product)){
        assocArr[product] += value
    }else{
        assocArr[product] = value
    }
    
}
for (let key in assocArr) {
    console.log(`${key} -> ${assocArr[key]}`);
    
}
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)