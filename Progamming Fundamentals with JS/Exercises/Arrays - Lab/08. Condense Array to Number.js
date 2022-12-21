function solve(numbers) {
  let condensed = [];
  while(numbers.length>1){
      for (let index = 0; index < numbers.length-1; index++) {
          let firstEl = numbers[index]
          let nextEl = numbers[index+1]
          condensed.push(firstEl+nextEl)
          
          
      }
      numbers=condensed
          condensed = []
  }
  console.log(numbers[0]);
}
solve([2,10,3])
