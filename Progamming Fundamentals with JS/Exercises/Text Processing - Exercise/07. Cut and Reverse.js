function solve(input){
let firstPart = input.substring(0,input.length/2).split('').reverse().join('')
let secondPart = input.substring(input.length/2).split('').reverse().join('')
console.log(firstPart);
console.log(secondPart);
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')