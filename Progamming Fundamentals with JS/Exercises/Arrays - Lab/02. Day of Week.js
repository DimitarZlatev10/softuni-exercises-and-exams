function solve(day){
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    if(day>=1&&day<=7){
        day=days[day-1]
        console.log(day);
    }else{
        console.log(`Invalid day!`);

    }
}
solve(11)