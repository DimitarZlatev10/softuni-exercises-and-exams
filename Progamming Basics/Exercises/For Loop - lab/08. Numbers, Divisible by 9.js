function solve(input){

    let firstNum = Number(input[0])
    let secondNum = Number(input[1])
    let sum = 0
    let numbersString = ''

    for(i = firstNum ; i <= secondNum; i++){
        if(i % 9 === 0){
        sum += i
         numbersString += i + '\n'
        }
    }
console.log(`The sum: ${sum}`);
console.log(numbersString);

}
solve(['100','200'])