function solve(array) {
    let holder = []
    for (let i = 0; i < array.length; i++) {
        if(array[i]<0){
          holder.unshift(array[i])
        }else{
            holder.push(array[i])
        }
        
    }
    console.log(holder.join(' \n'));
    
}
solve([3, -2, 0, -1])