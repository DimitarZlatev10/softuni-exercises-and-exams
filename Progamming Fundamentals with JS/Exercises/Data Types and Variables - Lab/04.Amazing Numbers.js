function solve(number){
    number = number.toString()
    let sum = 0
    for(let i = 0;i<number.length;i++){
        sum+=Number(number[i])
    }
    let result = sum.toString().includes('9')
    if(result = sum.toString().includes('9')){
        console.log( `${number} Amazing? True`);
    }else{
        console.log(`${number} Amazing? False`);
    }
    

}
solve(1233)