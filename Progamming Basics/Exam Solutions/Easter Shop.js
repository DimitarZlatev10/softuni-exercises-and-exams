function solve(input) {
  let numberOfEggs = Number(input[0]);
  let index = 1;
  let comand = input[index];
let soldEggs = 0
  while (comand !== "Close") {
    if (comand == "Buy") {
      index++
      comand = Number(input[index]);
      if(numberOfEggs<comand){
          console.log(`Not enough eggs in store!`);
          console.log(`You can buy only ${numberOfEggs}.`);
          break
      }
      soldEggs+=comand 
      numberOfEggs -= comand;
    }
    if(comand =='Fill'){
        index++
        comand = Number(input[index])
        numberOfEggs +=comand
    }
    index++
    comand = input[index]
    

  }
if(comand =='Close'){
    console.log(`Store is closed!`);
    console.log(`${soldEggs} eggs sold.`);
}


}

solve(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
solve(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
