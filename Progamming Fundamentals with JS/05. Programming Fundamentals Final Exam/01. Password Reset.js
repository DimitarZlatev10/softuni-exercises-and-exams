function solve(input) {
  let string = input.shift();
  let newPassword = "";

  for (let line of input) {
    line = line.split(" ");
    let command = line[0];
    if (command === "Done") {
      console.log(`Your password is: ${string}`);
      break;
    }
    if (command === "TakeOdd") {  
        newPassword = ''
      for (let i = 0; i < string.length; i++) {
        if (i % 2 == 1) {
          newPassword += string[i];
        }
      }
      string = newPassword
      console.log(string);
    } else if (command === "Cut") {
      let index = Number(line[1]);
      let length = Number(line[2]);
      string = string.split("");
      let spliced = string.splice(index, length);
      string = string.join("");
      console.log(string);
    } else if (command === "Substitute") {
      let substring = line[1];
      let substitute = line[2];
      if (string.includes(substring)) {
        while (string.includes(substring)) {
          string = string.replace(substring, substitute);
        }
        console.log(string);
      } else {
        console.log(`Nothing to replace!`);
      }
    }
  }
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "TakeOdd",
  "Done",
]);
