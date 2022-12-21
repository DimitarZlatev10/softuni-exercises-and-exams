function solve(input) {
let minutes = Number(input[0])
let seconds = Number(input[1])
let lengthInMetres = Number(input[2])
let secondsFor100Meteres = Number(input[3])

let calcInSec = minutes *60 +seconds
let calcNumberOfTimes = lengthInMetres / 120
let totalReducedTime = calcNumberOfTimes * 2.5
let marinsTime = (lengthInMetres / 100) * secondsFor100Meteres -totalReducedTime 
let controlTime = calcInSec
if(controlTime < marinsTime){
   let remainingTime = Math.abs(controlTime - marinsTime) 
    console.log(`No, Marin failed! He was ${remainingTime.toFixed(3)} second slower.`);

}else{
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${marinsTime.toFixed(3)}.`);
}



}
solve(["2", "12", "1200", "10"]);
solve(["1",
"20",
"1546",
"12"])
