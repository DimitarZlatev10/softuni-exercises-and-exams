function solve(n){
let number = n/10
let holder = []
for (let i = 0; i < 10; i++) {
    if(i<number){
      holder.push(`%`)
    }else{
        holder.push(`.`)
    }   
}
if(n===100){
    console.log(`${n}% Complete!`);
    console.log(`[${holder.join('')}]`);
}else if(n<100){
    console.log(`${n}% [${holder.join('')}]`);
    console.log(`Still loading...`);
}
}
solve(30)