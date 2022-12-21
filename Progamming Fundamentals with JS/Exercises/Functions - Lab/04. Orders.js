function solve(product,quantity){
let sum = 0
if(product==='water'){
    sum=quantity*1
}else if (product==='coffee'){
    sum=quantity*1.50
}else if (product==='coke'){
    sum=quantity*1.40
}else if (product==='snacks'){
    sum=quantity*2
}
console.log(sum.toFixed(2));
}
solve('water',5)