function solve(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);
    let beforeOrAfter;
    let deltaMinutes = 0;
    let deltaHours = 0;
    let isOnTime;
 
    let examInMinutes = examHour * 60 + examMinutes;
    let arrivalInMinutes = arrivalHour * 60 + arrivalMinutes;
    deltaMinutes = examInMinutes - arrivalInMinutes;
 

}


solve(["9", "30", "9", "50"]);
solve(["16", "00", "15", "00"]);
solve(["10", "00", "10", "00"]);