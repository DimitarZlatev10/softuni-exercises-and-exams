function solve(array){
let targets = array.shift().split(' ').map(Number)
for (const line of array) {
    let [command,index,value] = line.split(' ')
    index = Number(index)
    value = Number(value)
    if(command==='End'){
        console.log(targets.join('|'));
        break
    }
    if(command==='Shoot'&&index>=0&&index<=targets.length-1){
       targets[index]-=value
       if(targets[index]<=0){
           targets.splice(index,1)
       }
    }else if (command==='Add'){
        if(index>=0&&index<=targets.length-1){
            targets.splice(index,0,value)
        }else{
            console.log(`Invalid placement!`);
        }
    }else if (command==='Strike'){
        if(index-value>=0&&index+value<=targets.length-1){
            targets.splice(index-value,value*2+1)
        }else{
            console.log(`Strike missed!`);
        }
    }
}
}
solve(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
