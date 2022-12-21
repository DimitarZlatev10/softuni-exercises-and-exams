function solve(array){
let wagons =array.shift().split(' ').map(Number)
let wagonCapacity = array.shift()


for (const line of array) {
   let [command , n] = line.split(' ')
if(command==='Add'){
    wagons.push(Number(n))
}else{
    let passengers = Number(command)
    for (let i = 0; i < wagons.length; i++) {
       if(passengers+wagons[i]<=wagonCapacity){
           wagons[i]+=passengers
           break
       }
        
    }
}
    }
console.log(wagons.join(' '));

}
solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)