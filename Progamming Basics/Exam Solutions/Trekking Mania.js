function solve(input) {
  let numberOfGroups = Number(input[0]);
  let index = 1;
  let countOfPeople = Number(input[index]);
  let totalCount = 0;
  let musala = 0
  let monblan = 0
  let kilimanjaro = 0
  let kTwo = 0
  let everest = 0
  for (i = 1; i<= numberOfGroups; i++) {
    countOfPeople= Number(input[index])
    totalCount += Number(input[index]);
    if(countOfPeople<=5){
       musala +=countOfPeople
    }else if (countOfPeople>=6&&countOfPeople<=12){
        monblan +=countOfPeople
    }else if(countOfPeople>=13&&countOfPeople<=25){
        kilimanjaro +=countOfPeople
    }else if (countOfPeople>=26&&countOfPeople<=40){
        kTwo +=countOfPeople
    } else if (countOfPeople >=41){
        everest +=countOfPeople
    }
    index++
  }
  console.log(`${(musala/totalCount*100).toFixed(2)}%`);
  console.log(`${(monblan/totalCount*100).toFixed(2)}%`);
  console.log(`${(kilimanjaro/totalCount*100).toFixed(2)}%`);
  console.log(`${(kTwo/totalCount*100).toFixed(2)}%`);
  console.log(`${(everest/totalCount*100).toFixed(2)}%`);

}
solve(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
