function solve (n){ 
let array = n.map(Number)
let totalConcrete = 0
let workers = array.filter(len => len < 30).length
let dailyConcrete = []
let cost = 0
while(workers!==0){
    let concreteByCrew = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i]!==30){
            array[i]++
            concreteByCrew+=195
        }if(array[i]==30){
             workers--
        }
        
    }
    totalConcrete+=concreteByCrew
        dailyConcrete.push(concreteByCrew)
}
cost = totalConcrete * 1900
console.log(dailyConcrete.join(', '));
console.log(`${cost} pesos`);
}
solve([17,22,17,19,17])