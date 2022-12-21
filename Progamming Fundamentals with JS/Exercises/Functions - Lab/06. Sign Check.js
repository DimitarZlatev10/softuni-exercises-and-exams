function solve(numOne, numTwo, numThree) {
  if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
    console.log(`Positive`);
  }else if (numOne<0&&numTwo<0&&numThree>=0){
      console.log('Positive');
  }else if (numOne>=0&&numTwo<0&&numThree<0){
      console.log(`Positive`);
  }else {
      console.log(`Negative`);
  }
    
  
}
solve(-6, -12, 14);
