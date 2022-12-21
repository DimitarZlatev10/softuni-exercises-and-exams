function solve(one,two,three){
    let sum = one + two + three
    if(sum%1===0){
        console.log(`${sum} - Integer`);
    }else {
        console.log(`${sum} - Float`);
    }
}
solve(100, 200, 303)