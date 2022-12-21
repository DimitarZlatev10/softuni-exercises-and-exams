function solve(input){
const type = input[0]
const rows = Number(input[1])
const columbs = Number(input[2])
let income = 0

if(type=='Premiere'){
    income = rows * columbs * 12.0
}else if (type=='Normal'){
    income = rows * columbs * 7.50
}else if (type =='Discount'){
    income = rows * columbs * 5.0
}
console.log(`${income.toFixed(2)} leva`);



}
solve(['Premiere','10','12'])
solve(['Normal','21','13'])
solve(['Discount','12','30'])

