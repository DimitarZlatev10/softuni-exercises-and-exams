function solve(input) {
  let start = Number(input[0]);
  let finish = Number(input[1]);
  let n = Number(input[2]);
  let combinations = 0;
  let isComb = false;

  for (let a = start; a <= finish; a++) {
    for (let b = start; b <= finish; b++) {
      combinations++;
      if (a + b == n) {
        console.log(`Combination N:${combinations} (${a} + ${b} = ${n})`);
        isComb = true;

        break;
      }
    }
    if (isComb) {
      break;
    }
   
    }
    if(!isComb){
        console.log(`${combinations} combinations - neither equals ${n}`);
  }
}
solve(["1", "10", "5"]);
solve(['23','24','20'])

// console.log(`Combination N:${combinations} (${startNumber} + ${i} = ${magicalNumber})`);
// console.log(`Combination N:${combinations} (${startNumber} + ${i} = ${magicalNumber})`);
