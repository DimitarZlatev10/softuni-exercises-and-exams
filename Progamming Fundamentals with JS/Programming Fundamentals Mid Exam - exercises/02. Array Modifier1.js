function solve(array){
let modifiedArray = array.shift().split(' ').map(Number)
for (const line of array) {
    let [command , indexOne,indexTwo] = line.split(' ')
    indexOne = Number(indexOne)
    indexTwo = Number(indexTwo)
    if(command==='end'){
        console.log(modifiedArray.join(', '));
        break
    }
    if(command==='swap'){
        let firstIndex = modifiedArray[indexOne]
        let secondIndex = modifiedArray[indexTwo]
        modifiedArray[indexOne]=secondIndex
        modifiedArray[indexTwo]=firstIndex
    }else if (command==='multiply'){
        modifiedArray[indexOne]*=modifiedArray[indexTwo]
    }else if (command==='decrease'){
        let reduced = modifiedArray.map(a =>a-1)
        modifiedArray= reduced
    }
    
}
}
solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )