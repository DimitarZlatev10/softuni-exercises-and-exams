function solve(input){
let name = input[0]
let startingPoints = Number(input[1])
let graders = Number(input[2])
let comand = 3
let grader = input[comand]
let comand2 = 4
let points = Number(input[comand2])
let neededPoints = 1250.5
for (i = 1 ; i<=graders;i++){
    
  grader = ((input[comand].length * points) /2)
  startingPoints +=grader
  comand+=2
  comand2+=2
  grader = input.length 
  grader = input[comand]
  points = Number(input[comand2])

  if(startingPoints>neededPoints){
      console.log(`Congratulations, ${name} got a nominee for leading role with ${(startingPoints).toFixed(1)}!`);
      break;
  }
}
if(startingPoints <neededPoints){
    neededPoints -=startingPoints
    console.log(`Sorry, ${name} you need ${(neededPoints).toFixed(1)} more!`);
}
}
solve (["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"])
solve (["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])