function solve(input){
let total = Number(input[0])
sum = 0
let i = 1

while(total !==sum ){
    sum += Number(input[i])
    i++
}

console.log(sum);


}
solve(['100','10','20','30','40'])