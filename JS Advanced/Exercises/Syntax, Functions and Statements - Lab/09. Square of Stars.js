function solve(input) {
  let number = input;
  let result = "";
  if (number) {
    for (let i = 0; i < number; i++) {
      result = "";
      for (let k = 0; k < number; k++) {
        result += "* ";
      }
      console.log(result);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      let result = "";
      for (let k = 0; k < 5; k++) {
        result += "* ";
      }
      console.log(result);
    }
  }
}
solve(2);
