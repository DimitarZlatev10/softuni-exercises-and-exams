function solve(input){
let n = Number(input[0])
let currentNum = 1;

while(true){
    if(currentNum > n){
        break;
    }
    console.log(currentNum);
    currentNum = 2 * currentNum + 1
}

}
solve(['3'])