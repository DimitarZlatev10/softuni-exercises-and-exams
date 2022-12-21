function solve(array){
let targets = array.shift().split(' ').map(Number)

let shotCount = 0
for (const line of array) {
    if(line==='End'){
        console.log(`Shot targets: ${shotCount} -> ${targets.join(' ')}`);
        break
    }
    let index = Number(line)
     let shot = targets[index]
    if(index>=0&&index<=targets.length-1){
    if(targets[index] >=0){
       for (let i = 0; i < targets.length; i++) {
        if(targets[i]>shot){
            if(targets[i]>0){
            targets[i]-=shot
            }
        }  else if (targets[i]<=shot){
            if(targets[i]>0){
            targets[i]+=shot
            }
        } 
           
       }
        targets[index] = -1
        shotCount++
    }
    }
    
}
}
// solve(["24 50 36 70",
// "0",
// "4",
// "3",
// "1",
// "End"])
solve(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
