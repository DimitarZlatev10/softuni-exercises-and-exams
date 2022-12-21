function solve(input){
let recordInSeconds =Number(input[0])
let distanceInMeteres = Number(input[1])
let timeInSecondsToSwimTheDistance = (input[2])

let swimDistance = distanceInMeteres * timeInSecondsToSwimTheDistance
let addedSecondsPerTime = Math.floor(distanceInMeteres / 15) *12.5
let timeInGeneral = swimDistance + addedSecondsPerTime

if (recordInSeconds<timeInGeneral){
  let neededTime =timeInGeneral-recordInSeconds
    console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`);
}else{
  let neededTime =timeInGeneral-recordInSeconds
  console.log(`Yes, he succeeded! The new world record is ${timeInGeneral.toFixed(2)} seconds.`);


}
}
solve(['10464','1500','20'])
solve(['55555.67','3017','5.03'])
