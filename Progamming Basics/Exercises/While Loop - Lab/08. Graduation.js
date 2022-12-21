function solve(input){
let name = input[0]
let grade = 1
let i = 1 
let num = Number(input[i])
let counter = 0
let totalScore = 0

while (grade<=12){

    if(num<4){
        counter++
        if(counter==2){
            console.log(`${name} has been excluded at ${grade} grade`);
            break
        }
        }else{
          totalScore += num 
          grade++ 
        }
    i++
       num = Number(input[i])
       }
       
if(grade > 12 ){
console.log(`${name} graduated. Average grade: ${(totalScore/12).toFixed(2)}`);
}
}
solve(['Gosho','5','5.5','6','5.43','5.5','6','5.55','5','6','6','5.43','5'])
solve(['Mimi','5','5.5','6','5.43','5.5','6','5.55','2','3'])