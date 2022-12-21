function solve(input) {
  let boolean = true;
  for (let i = 0; i < input.length; i++) {
      if(input.length>=3){
    let currRow = input[i].reduce((a, b) => a + b);
    let currCol = input[0][i] + input[1][i] + input[2][i];
    if (currRow !== currCol) {
      boolean = false;
      break
    }
}else{
    let currRow = input[i].reduce((a, b) => a + b);
    let currCol = input[0][i] + input[1][i]
    if (currRow !== currCol) {
      boolean = false;
      break
    }
}
  }
  console.log(boolean);
//   return boolean
}
solve([[4, 5, 6],
    [6, 5, 4],
   
   );
