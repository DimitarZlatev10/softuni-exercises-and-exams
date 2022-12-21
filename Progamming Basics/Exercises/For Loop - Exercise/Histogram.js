function solve(input) {
  let n = Number(input.shift());

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let index = 0; index < n; index++) {
    let currentNumber = Number(input.shift());
    if (currentNumber < 200) {
      p1++;
    } else if (currentNumber >= 200 && currentNumber <= 399) {
      p2++;
    } else if (currentNumber >= 400 && currentNumber <= 599) {
      p3++;
    } else if (currentNumber >= 600 && currentNumber <= 799) {
      p4++;
    } else if (currentNumber >= 800){
      p5++;
    }
  }
  let nP1 = (p1 / n * 100).toFixed(2)
  let nP2 = (p2 / n * 100).toFixed(2)
  let nP3 = (p3 / n * 100).toFixed(2)
  let nP4 = (p4 / n * 100).toFixed(2)
  let nP5 = (p5 / n * 100).toFixed(2)
console.log(`${nP1}%`);
console.log(`${nP2}%`);
console.log(`${nP3}%`);
console.log(`${nP4}%`);
console.log(`${nP5}%`);





}
solve(["3", "1", "2", "999"]);
