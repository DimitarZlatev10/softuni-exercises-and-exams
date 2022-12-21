function solve(input) {
  let stepsGoal = 10000;
  let gh = input[input.length - 2];
  let steps = 0;

if(gh==='Going home'){
    for(let i = 0 ; i <input.length-2 ; i++){
        steps+= Number(input[i])
    }
    steps +=Number(input[input.length-1])

}else {
    for(let i=0 ; i<input.length ; i++){
        steps+=Number(input[i])
    }
}
if(steps>stepsGoal){
    steps-=stepsGoal
    console.log(`Goal reached! Good job!`);
    console.log(`${steps} steps over the goal!`);

}
else{
    stepsGoal-=steps
    console.log(`${stepsGoal} more steps to reach goal.`);
}

}
solve(["1000", "1500", "2000", "6500"]);
//solve(["1500", "300", "2500", "3000", "Going home", "200"]);
