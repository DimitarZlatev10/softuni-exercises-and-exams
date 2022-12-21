function solve(array) {

  let descendingNumbers=  array.sort((a,b)=>a-b )
  console.log(descendingNumbers.slice(0,2).join(' '));
    
}
solve([30, 15, 50, 5])