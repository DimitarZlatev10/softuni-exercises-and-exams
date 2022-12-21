function solve(array) {
    let moves = 0
  let elements = array.shift().split(' ')
  for (const line of array) {
      let [index1,index2] = line.split(' ')
      if (elements.length===0||elements.length===1){
          console.log(`You have won in ${moves} turns!`);
         break 
      }
      else if(index1==='end'){
          console.log(`Sorry you lose :(`);
          console.log(elements.join(' '));
          break
      } 
      moves++
      if(index1>=elements.length||index1<0||index2>=elements.length||index2<0||index1===index2){
          let index = Math.trunc(elements.length/2)
          if(index%2!==0){
              index-=1
          }
          let element = `-${moves}a`
          elements.splice(index,0,element,element)  
          console.log(`Invalid input! Adding additional elements to the board`);
      }else{
          let num1 = elements[index1]
          let num2 = elements[index2]
          if(num1===num2){
              elements.splice(index1,1)
              index2 = elements.indexOf(num2)
              elements.splice(index2,1)
              console.log(`Congrats! You have found matching elements - ${num1}!`);
          }else if (num1!==num2){
              console.log(`Try again!`);
          }
      }

  }
      
  
        
    
}
solve([
    '1 1 2 2 3 3 4 4 5 5',
    '1 0',
    '1 0',
    '1 0',
    '1 0',
    '1 0',
    'end' 
])
// solve( [
//     "1 1 2 2 3 3 4 4 5 5", 
//     "1 1",
//     "-1 0",
//     "1 0", 
//     "1 0", 
//     "1 0", 
//     "end"
//  ] )
//  console.log(`=================`);
// solve([
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
//     )
//     console.log(`=============`);
// solve([
//     "a 2 4 a 2 4", 
//     "4 0", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
//     )