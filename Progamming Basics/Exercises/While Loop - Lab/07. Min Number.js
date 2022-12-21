function solve(input) {
  let minNum = Number.MAX_SAFE_INTEGER;
  let i = 0;
  let n = input[i];
  while (n !== "Stop") {
    n = Number(n);
    if (minNum > n) {
      minNum = n;
    }
    i++;
    n = input[i];
  }
  console.log(minNum);
}
solve(['100','90','80','70','Stop'])
