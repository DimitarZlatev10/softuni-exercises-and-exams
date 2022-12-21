function solve(input){
let a = 7.61;
let b = 0.18;
let c = input[0] * a ;
let d = b * c ;
let result = c - d  ;

console.log(`The final price is: ${result} lv.`);
console.log(`The discount is: ${d} lv.`)




}

solve(['550'])
solve(['150'])