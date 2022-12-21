function solve(input){
let count = Number(input.shift())
let minNumber = Number.MAX_SAFE_INTEGER
let numbers = Number(input.shift())

for(let index = 1 ; index<=count;index++){
    if(minNumber>numbers){
        minNumber=numbers
    }
    numbers = Number(input.shift())
}
console.log(minNumber);





}
solve(['2','100','99'])
solve(['3','-10','20','-30'])
solve(['2','-1','-2'])
