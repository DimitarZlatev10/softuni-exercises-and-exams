function solve(input) {
let n = Number(input[0])
let i = 1 
let maxPoints = 0
let winner =  ''

for(let cook  = 1 ; cook <=n ; cook++){
    let name = input[i++]
    let points = 0
    let rating = input[i++]
   while(rating !=='Stop'){
       points +=Number(rating)
       rating = input[i++]
   }
   console.log(`${name} has ${points} points.`);
   if(maxPoints<points){
       maxPoints = points
       winner = name
    console.log(`${name} is the new number 1!`);
    }

}
console.log(`${winner} won competition with ${maxPoints} points!`);
}
solve([
  "3",
  "Chef Manchev",
  "10",
  "10",
  "10",
  "10",
  "Stop",
  "Natalie",
  "8",
  "2",
  "9",
  "Stop",
  "George",
  "9",
  "2",
  "4",
  "2",
  "Stop",
]);
solve(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])
