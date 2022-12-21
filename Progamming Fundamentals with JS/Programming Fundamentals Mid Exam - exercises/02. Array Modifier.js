function solve(array) {
  let modifiedArray = array.shift().split(' ').map(Number)
  for (const line of array) {
      let [command , element , otherElements] = line.split(' ')
      element= Number(element) , otherElements= Number(otherElements)
      if(command==='swap'){
      let firstElement = Number(modifiedArray[element])
      let secondElement = Number(modifiedArray[otherElements])
      modifiedArray[element]  = secondElement
      modifiedArray[otherElements] = firstElement
      }else if (command==='multiply') modifiedArray[element] *=modifiedArray[otherElements]
      else if (command==='decrease'){
       let reduced=  modifiedArray.map(n => n-1) 
       modifiedArray = reduced  
     } else if (command==='end') break
       
     
  }
  console.log(modifiedArray.join(', '));
}
solve([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
