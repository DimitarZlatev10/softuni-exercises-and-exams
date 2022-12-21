function solve(input) {
  let n = Number(input.shift());

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let index = 0; index < n; index++ ) {
    let currentNumber = Number(input.shift());
    if (currentNumber % 2 == 0) {
      p1++;
    }  if (currentNumber % 3 == 0) {         // ако числото се дели на 2 и 4 пишем if вмесно if else.
      p2++;
    }  if (currentNumber % 4 == 0) {
      p3++;
    }
  }
  let nP1 = ((p1 / n) * 100).toFixed(2);
  let nP2 = ((p2 / n) * 100).toFixed(2);
  let nP3 = ((p3 / n) * 100).toFixed(2);
  console.log(`${nP1}%`);
  console.log(`${nP2}%`);
  console.log(`${nP3}%`);
}
//solve(['3','3','6','9'])
solve(['10','680','2','600','200','800','799','199','46','128','65'])


