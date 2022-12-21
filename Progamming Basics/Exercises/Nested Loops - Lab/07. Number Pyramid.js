function solve(input){
let targetNum = Number(input[0])
let currNum = 0
let isEqual = false

for(let rows=1 ; rows<=targetNum;rows++){
    let printline=''
    for(let cols =1 ; cols <=rows;cols++){
        currNum++
        printline+=currNum + ' '
        if(currNum==targetNum){
            isEqual =true
            break
        }

    }
console.log(printline);
if(isEqual){
  break
}


}



}
solve(['15'])