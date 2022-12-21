function solve(array,n){
 let [bombNumber, power ] = n 
 let sum = 0
 let index = array.indexOf(bombNumber)
while(index!=-1){
    let start = index-power<0 ?0 : index-power
    array.splice(start,power*2+1)
    index=array.indexOf(bombNumber)
}

for (let k = 0; k < array.length; k++) {
   sum += array[k]
    
}
console.log(sum);
}
solve([1, 7, 7, 1, 2, 3],
    [7, 1]
    
    )