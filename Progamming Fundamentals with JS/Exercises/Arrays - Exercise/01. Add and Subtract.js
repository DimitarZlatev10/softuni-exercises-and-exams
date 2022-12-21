function solve(numbers){
    let numbersSum = 0
    let afterSum = 0
    for (let index = 0; index < numbers.length; index++) {
        numbersSum+=numbers[index]
        if(numbers[index]%2==0){
            numbers[index]+=index
        }else{
            numbers[index]-=index
        }
        afterSum+=numbers[index]

    }
    console.log(numbers);
    console.log(numbersSum);
    console.log(afterSum);
}
solve([5, 15, 23, 56, 35])