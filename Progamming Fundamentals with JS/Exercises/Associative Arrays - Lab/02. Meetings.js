function solve(input){
let assocArr = {}
for (let line of input) {
    let command = line.split(' ')
    let weekDay = command[0]
    let name = command[1]
    if(assocArr.hasOwnProperty(weekDay)){
        console.log(`Conflict on ${weekDay}!`);
    }else{
        assocArr[weekDay] = name
        console.log(`Scheduled for ${weekDay}`);
    }
    
}
for (let key in assocArr) {
    
    console.log(`${key} -> ${assocArr[key]}`);
    
}
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)