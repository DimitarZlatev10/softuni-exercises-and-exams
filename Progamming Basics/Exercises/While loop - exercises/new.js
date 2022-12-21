function solve(input) {
    let stepsPerDay = 10000;
    let count = 0
    let index = 0;
    while(true){
        let operation = Number(input[index++])
         count += operation
         
         if(operation === 'Going home'){
             if(count >=stepsPerDay){
               count -=stepsPerDay
               console.log(`Goal reached! Good Job!`); 
               console.log(`${count} steps over the goal!`);
               }
              if (count<stepsPerDay){
             count = Math.abs(count-stepsPerDay)
             console.log(`${count} more steps to reach goal.`);
             break;
         }
       }
    }
    if(count>=stepsPerDay){
        count -=stepsPerDay
        console.log(`Goal reached! Good Job!`); 
      console.log(`${count} steps over the goal!`);
      
    }else{
        count = Math.abs(count-stepsPerDay)
        console.log(`${count} more steps to reach goal.`);
        
    }
  
}
  solve(["1000", "1500", "2000", "6500"]);