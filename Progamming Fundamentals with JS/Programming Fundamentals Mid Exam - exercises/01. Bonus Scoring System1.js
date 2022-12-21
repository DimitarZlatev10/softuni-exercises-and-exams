function solve(array){
let numberOfStudents = Number(array.shift())
let numberOfLectures = Number(array.shift())
let additionalBonus = Number(array.shift())
let minNumber = 0
let attendedLectures = 0
for (let i = 0; i < numberOfStudents; i++) {
    let bonusFormula = (((1.0*Number(array[i])/numberOfLectures )) * (5+additionalBonus))
    if(bonusFormula>minNumber){
       minNumber=bonusFormula
       attendedLectures = Number(array[i])
    }

  }  

console.log(`Max Bonus: ${Math.ceil(minNumber)}.`);
console.log(`The student has attended ${attendedLectures} lectures.`);
}
solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )