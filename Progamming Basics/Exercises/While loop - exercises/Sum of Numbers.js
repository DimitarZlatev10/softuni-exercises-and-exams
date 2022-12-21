function solve(input) {

    let number = input[0]
    let lengthh = input[0].length 
    let comand = 0
    let sum = number.charAt(comand)
    let summ= 0
    for(i=1 ; i<=lengthh ; i++){
        sum = Number(sum)
        summ +=sum
        comand++
        sum = number.charAt(comand)
    }
    console.log(`The sum of the digits is:${summ}`);
}
solve(["1234"]);
