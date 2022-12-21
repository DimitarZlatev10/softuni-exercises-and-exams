function solve(n){
   let sum =0
   let currentNumber=1
   for(i=1;i<=n;i++){
       sum+=currentNumber
       console.log(currentNumber);
       currentNumber+=2
   }
   console.log(`Sum ${sum}`);
}
solve(5)