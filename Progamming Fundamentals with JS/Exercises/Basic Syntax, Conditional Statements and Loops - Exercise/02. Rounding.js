function solve(num,precision){
    if(precision>15){
        precision = 15

    }
    const result = num.toFixed(precision)
    console.log(parseFloat(result));
}
solve(3.1415926535897932384626433832795,2)
solve(10.5,3)
