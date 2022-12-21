function solve(array) {
    let students = Number(array.shift())
    let lectures = Number(array.shift())
    let initialBonus = Number(array.shift())
    let maxBonus = 0
    let maxAttendance = 0
    
    for (let i = 0; i < students; i++) {
        let attendance = Number(array[i])
        let bonus = ((1.0*attendance / Number(lectures)) * (5+Number(initialBonus)))
        if(bonus>=maxBonus){
           maxBonus=bonus
           maxAttendance=attendance
        }
    }
    
console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
console.log(`The student has attended ${maxAttendance} lectures.`);
}
// solve([
//     '5',  '25', '30',
//     '12', '19', '24',
//     '16', '20'
//   ]  
//   )
  solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  )