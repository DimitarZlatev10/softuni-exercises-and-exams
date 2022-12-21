function solve(array){
for (let i = 0; i < array.length; i++) {
   
    for (let j = i+1; j < array.length; j++) {
        if(array[i]===array[j]){
            array.splice(j,1)
            i=0  
        }
       
    }
   
    
}
console.log(array.join(' '));

}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2])