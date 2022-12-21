function solve(input){
let number = Number(input[0])
let output = 1
for(let index = 1; index <=number ; index++){
    output = output * index // може и с *=index.
}
console.log(output);
}
solve(['4'])
solve(['8'])
