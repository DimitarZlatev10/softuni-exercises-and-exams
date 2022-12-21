function solve(array) {
    let finalResult = []
   let divideNumber = array.split(' ').map(Number)
   let averageNumber = array.split(' ').map(Number).reduce((a,b)=> a+b,0)
   averageNumber =averageNumber/ divideNumber.length
   let greaterThanAverage = divideNumber.filter(item => item>averageNumber).sort((a,b)=>b-a)
   if(greaterThanAverage.length>5){
       for (let i = 0; i <5; i++) finalResult.push(greaterThanAverage[i])    
   } else if (greaterThanAverage.length>0&&greaterThanAverage.length<=5) console.log(greaterThanAverage.join(' '));
   else console.log(`No`);
   console.log(finalResult.join(' '));
   
   
}
solve('10 20 30 40 50')