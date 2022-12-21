function solve(input){
let width = Number(input[0])
let length = Number(input[1])
let height = Number(input[2])
let remainingMeters = 0
let result = width * length * height
let st = input[input.length-1]

if(st ==='Done'){
for(let index = 3 ; index<input.length-1 ;index++ ){
    remainingMeters += Number(input[index])
}
}else {
    for(let index = 3 ; index<input.length;index++){
        remainingMeters +=Number(input[index])
    }   
}
if (result>remainingMeters){
    result-=remainingMeters
    console.log(`${result} Cubic meters left.`);
}
else {
    remainingMeters-=result
    console.log(`No more free space! You need ${remainingMeters} Cubic meters more.`);
}

}
solve(['10','1','2','4','6','Done'])
solve(['10','10','2','20','20','20','20','122'])
