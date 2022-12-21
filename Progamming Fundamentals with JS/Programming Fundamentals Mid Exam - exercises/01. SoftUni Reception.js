function solve(array) {
    let hours = 0
    let count = 0
   
 let studentsCount = array.pop()
 studentsCount = Number(studentsCount)
 let employeeEffecienty = array.map(Number).reduce((a,b)=>a+b,0)
 while(studentsCount>0){
     studentsCount -=employeeEffecienty
     hours++
     count++
     if(studentsCount<=0) break
     if(count===3) hours++ , count=0
     
 }
    console.log(`Time needed: ${hours}h.`);
}
solve(['5','6','4','20'])
solve(['1','2','3','45'])