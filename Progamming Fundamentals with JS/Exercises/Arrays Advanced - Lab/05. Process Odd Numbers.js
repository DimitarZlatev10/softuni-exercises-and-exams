function solve(array) {
let holder = []
    for (let i = 0; i < array.length; i++) {
        if(i%2!==0){
            array[i]*=2
         holder.push(array[i])
        }
        
    }
console.log(holder.reverse().join(' '));

}
 solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])