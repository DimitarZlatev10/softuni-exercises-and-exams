function solve(input) {
  let n = Number(input[0]);
  let comand = 1;
  let number = Number(input[comand]);
 let p1= 0
 let p2=0
 let p3=0
  for (i = 0; i <= n; i++) {
  if(number % 2==0){
      p1++
  } if (number% 3 == 0){
      p2++
  } if (number %4 ==0){
      p3++
  }
  comand++
  number= Number(input[comand])
  }
  console.log(`${(p1/n*100).toFixed(2)}%`);
  console.log(`${(p2/n*100).toFixed(2)}%`);
  console.log(`${(p3/n*100).toFixed(2)}%`);

}
solve(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
