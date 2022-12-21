function solve(input) {
    let examHour = Number(input[0])
    let examMinute = Number(input[1])
    let arrivalHour = Number(input[2])
    let arrivalMinute = Number(input[3])

    let totalExamMin = examHour * 60 + examMinute
    let totalArrivalMin = arrivalHour * 60 + arrivalMinute

    let difference = Math.abs(totalExamMin - totalArrivalMin)
    let hourDiff = Math.floor(difference / 60)
    let minDiff = difference % 60
    if(minDiff === 0 || minDiff < 10 && hourDiff >0){
        minDiff = `0${minDiff}`
    }

    if(totalExamMin == totalArrivalMin ){
        console.log(`On time`);
    }else if (totalArrivalMin > totalExamMin&& difference < 60){
        console.log(`Late`);
        console.log(`${minDiff} minutes after the start`);
    }else if (totalArrivalMin > totalExamMin && difference >=60){
        console.log('Late');
        console.log(`${hourDiff}:${minDiff} hours after the start`);
    }else if (difference <=30){
        console.log('On time');
        console.log(`${minDiff} minutes before the start`);
    }else if (difference >30 && difference <60){
        console.log('Early');
        console.log(`${minDiff} minutes before the start`);
    }else if(difference >=60 && minDiff <10)  {
        console.log('Early');
        console.log(`${hourDiff}:${minDiff} hours before the start`);
    }else if (difference >=60 && minDiff >10 && minDiff <60) {
        console.log('Early');
        console.log(`${hourDiff}:${minDiff} hours before the start`);
    }
    
}
solve(["9", "30", "9", "50"]);
solve(["16", "00", "15", "00"]);
solve(["10", "00", "10", "00"]);
solve (["9", "00", "10", "30"])
solve (["11", "30", "8", "12"])
solve (["11", "30", "12", "29"])
