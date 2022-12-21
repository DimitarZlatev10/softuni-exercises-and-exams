function solve(input){

let cm = Number(input[0])
let cm1 = Number(input[1])
let sizeOfCake = cm * cm1
let st = input[input.length-1]
let takenPeaces = 0

if(st ==='STOP'){
    for(let i = 2 ; i<input.length-1;i++){
    takenPeaces += Number(input[i])
    }
}else{
    for(let i = 2 ; i<input.length;i++){
        takenPeaces+= Number(input[i])
    }
}
if(takenPeaces>sizeOfCake){
    takenPeaces -=sizeOfCake
    console.log(`No more cake left! You need ${takenPeaces} pieces more.`);
}else if (takenPeaces<sizeOfCake){
    sizeOfCake -=takenPeaces
    console.log(`${sizeOfCake} pieces are left.`);
}

}
solve(['10','10','20','20','20','20','21'])
solve(['10','2','2','4','6','STOP'])
