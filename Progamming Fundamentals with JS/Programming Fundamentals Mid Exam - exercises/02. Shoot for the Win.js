function solve(array){
let targets = array.shift()
for (const line of array) {
    if(line==='End'){
        console.log(`Shot targets: {count} -> {target1} {target2}… {targetn}`);
        break
    }
    let number = Number(line)
    let index = array.indexOf(number)
    if(index>=0&&index<=targets.length-1){
        targets[index] = `-1`
        for (let i = 0; i < targets.length; i++) {
           
        }
    }
    
}

}
solve((["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
)