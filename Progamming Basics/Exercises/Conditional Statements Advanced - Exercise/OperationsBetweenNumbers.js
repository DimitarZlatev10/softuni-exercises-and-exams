function solve(input){
let numberOne = Number(input[0])
let numberTwo = Number(input[1])
let equation = input[2]
let result = 0


if (equation=='+'){
     result = numberOne + numberTwo
    if(result % 2 == 0){
        console.log(`${numberOne} ${equation} ${numberTwo} = ${result} - even`);
    }
    else {
        console.log(`${numberOne} ${equation} ${numberTwo} = ${result} - odd`);
    }
}
if(equation=='-'){
    result = numberOne - numberTwo
    if(result % 2==0){
        console.log(`${numberOne} ${equation} ${numberTwo} = ${result} - even`);
    }
    else {
        console.log(`${numberOne} ${equation} ${numberTwo} = ${result} - odd`);
    }
}
if(equation=='*'){
    result = numberOne * numberTwo
    if(result % 2==0){
        console.log(`${numberOne} ${equation} ${numberTwo} = ${result} - even`);
    }
    else {
        console.log(`${numberOne} ${equation} ${numberTwo} = ${result} - odd`);
} 
}
if(equation=='/'){
    if(numberTwo==0){
    console.log(`Cannot divide ${numberOne} by zero`);

    }
    else {
    result = numberOne / numberTwo
    console.log(`${numberOne} ${equation} ${numberTwo} = ${result.toFixed(2)}`);
    }
}
if(equation=='%'){
    if(numberTwo==0){
        console.log(`Cannot divide ${numberOne} by zero`);
    }
    else {
    result = numberOne % numberTwo
    if (result % 3==1){
        console.log(`${numberOne} ${equation} ${numberTwo} = ${result}`);
    }
    }
}





}

solve(['10','12','+'])
solve(['10','1','-'])
solve(['7','3','*'])
solve(['123','12','/'])
solve(['10','3','%'])
solve(['112','0','/'])
solve(['10','0','%'])
