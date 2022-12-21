function solve(input){
    let maxNum = Number.MIN_SAFE_INTEGER
    let i = 0
    let n = input[i]
    
    while(n !=='Stop'){
        n = Number(n)
        if(maxNum <n){
            maxNum = n 
        }
        i++
        n=input[i]
    }
    console.log(maxNum);
}
solve(['100','90','80','70','Stop'])