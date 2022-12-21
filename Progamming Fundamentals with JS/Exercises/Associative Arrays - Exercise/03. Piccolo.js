function solve(array){
let parking = {}
for (let line of array) {
    let [command , car] = line.split(', ')
    if(command==='IN'){
        parking[car] = command
    }else if(command==='OUT'){
        delete parking[car]
    }
}
let keys = Object.keys(parking)
let sorted = keys.sort((a,b)=> a.localeCompare(b))
if(sorted.length>0){
    console.log(sorted.join("\n"));
}else {
    console.log(`Parking Lot is Empty`);
}
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)