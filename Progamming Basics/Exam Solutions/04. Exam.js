function solve(input){

    let students = Number(input[0])
    let topStudents = 0
    let between4And499 = 0
    let between3And399 = 0
    let fail = 0
    let average = 0
let a = 1
let grade = Number(input[a])
    for(i=1;i<=students;i++){
if(grade >=5){
    topStudents++
    
}else if (grade>=4&&grade<=4.99){
    between4And499++
}else if (grade>=3&&grade<=3.99){
    between3And399++
}else if (grade<3){
    fail++
}
average+=grade
a++
grade= Number(input[a])
    }
console.log(`Top students: ${(topStudents/students*100).toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${(between4And499/students*100).toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${(between3And399/students*100).toFixed(2)}%`);
console.log(`Fail: ${(fail/students*100).toFixed(2)}%`);
console.log(`Average: ${(average/students).toFixed(2)}`);




}
solve (["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"])