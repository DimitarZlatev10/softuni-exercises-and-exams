function solve(array){
let assocArr = {}
for (let line of array) {
      let command = line.split(':')
      let name = command[0]
      let adress = command[1]
    assocArr[name] = adress 
}
let sorted = Object.entries(assocArr)
 sorted.sort((a, b) => a[0].localeCompare(b[0]))
for (let key of sorted) {
    console.log(`${key[0]} -> ${key[1]}`);
    
}
}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)