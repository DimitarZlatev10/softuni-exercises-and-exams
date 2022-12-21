function solve(input){
let typeOfYear = input[0];
let holidays = Number(input[1]);
let weekends = Number(input[2]);

let weekendsInSofia = 48 - weekends
let weekendsInSofiaForPlay= weekendsInSofia * 3.0/4.0
let holidaysInSofia = holidays * 2.0/3.0
let totalNumberOfGamesPlayed = weekends + weekendsInSofiaForPlay+ holidaysInSofia

if(typeOfYear==='leap'){
    totalNumberOfGamesPlayed = totalNumberOfGamesPlayed + totalNumberOfGamesPlayed *0.15
    console.log(Math.floor(totalNumberOfGamesPlayed));
}else {
    totalNumberOfGamesPlayed = totalNumberOfGamesPlayed
    console.log(Math.floor(totalNumberOfGamesPlayed));
}







}
solve(['leap','5','2'])
solve(['normal','3','2'])
solve(['leap','2','3'])
solve(['normal','11','6'])
solve(['leap','0','1'])
solve(['normal','6','13'])

