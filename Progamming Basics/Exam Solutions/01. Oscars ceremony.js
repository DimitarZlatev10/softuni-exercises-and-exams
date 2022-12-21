function solve(input){

let rent = Number(input[0])
let statuets = rent - rent * 0.30
let catering = statuets - statuets * 0.15
let sound = catering / 2

let totalPrice = rent + statuets + catering + sound
console.log(totalPrice.toFixed(2));


}
solve(["3500"])
solve(["5555"])
