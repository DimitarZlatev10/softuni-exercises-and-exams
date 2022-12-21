function solve(array){
for (let i = 0; i < array.length-1; i++) {
    let sumROne=array[i].reduce((a,b)=>a+b)
    let sumRTwo=array[i+1].reduce((a,b)=>a+b)
    let sumCOne=0
    let sumCTwo=0
    for (let j = 0; j < array.length; j++) {
        sumCOne+=array[i][j]
        sumCTwo+=array[i+1][j]

        
    }
    if(sumROne!==sumRTwo||sumCOne!==sumCTwo){
        return false
    }
}
return true
}
console.log(solve(([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )))