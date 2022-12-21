function solve(numbers) {
  let evenSum = 0;
  let oddSum = 0;
  for(let current of numbers){
      if(current%2==0){
          evenSum+=current
      }else{
          oddSum+=current
      }
  }
  console.log(evenSum-oddSum);
}
solve([1,2,3,4,5,6])