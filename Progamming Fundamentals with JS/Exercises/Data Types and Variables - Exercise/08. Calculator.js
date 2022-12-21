function solve(num,plusMinus,num2){
    let sum = 0
    if(plusMinus==='+'){
        sum = num+num2
    }else if (plusMinus==='-'){
        sum = num-num2
    }else if (plusMinus==='*'){
        sum= num*num2
    }else if (plusMinus==='/'){
        sum = num/num2
    }
    console.log(sum.toFixed(2));
}
solve(5,
    '+',
    10
    )