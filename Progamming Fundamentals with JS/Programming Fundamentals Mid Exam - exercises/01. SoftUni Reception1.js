function solve(array){
let waitingStudents = array.pop()
array = array.map(Number)
let answersPerHour = array.reduce((a,b)=>a+b)
let hours = 0
while(waitingStudents>0){
    waitingStudents-=answersPerHour
    hours++
    if(hours%4===0){
        hours++
    }

}
console.log(`Time needed: ${hours}h.`);
}
solve(['5','6','4','20'])
solve(['1','2','3','45'])