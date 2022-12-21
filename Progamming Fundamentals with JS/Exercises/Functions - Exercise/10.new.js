function factorialDivision(firstNum, secondNum) {
    return (factorial(firstNum) / factorial(secondNum)).toFixed(2);

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
let result = factorialDivision(5,2)
console.log(result);