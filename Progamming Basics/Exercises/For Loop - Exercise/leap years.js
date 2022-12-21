function solve(input){
let year = Number(input[0])
let secondYear = Number(input[1])
let sum = 0

for(let i = year ; i<=secondYear; i++){ // вместо i++ пишем +=4 , махаме if и получаваме същото решение.
    if(i % 4===0)
    console.log(i);
}





}
solve(['1908','1919'])
solve(['2000','2011'])
solve(['1584','1597'])
solve(['2020','2032'])
