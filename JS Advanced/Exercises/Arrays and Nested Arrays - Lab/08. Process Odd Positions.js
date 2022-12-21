function solve(input){
    let holder = []
for (let i = 0; i < input.length; i++) {
    if(i%2!==0){
    holder.push(input[i])
    }
    
}
holder = holder.map(a=>a*2).reverse()
return holder
}
solve([10, 15, 20, 25])