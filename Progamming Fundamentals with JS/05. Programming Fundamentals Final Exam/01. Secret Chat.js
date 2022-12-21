function solve(input) {
  let word = input.shift();
  input.pop();
  for (let line of input) {
    line = line.split(":|:");
    let command = line[0];
    if (command === "InsertSpace") {
      let index = Number(line[1]);
      let start = word.substring(0, index);
      let end = word.substring(index);
      word = start + " " + end;
      console.log(word);
    } else if (command === "Reverse") {
      let sub = line[1];
      if (word.includes(sub)) {
        let index = word.indexOf(sub);
        let second = word
          .substring(index, index + sub.length)
          .split("")
          .reverse()
          .join("");
        let first = word.substring(0, index);
        let final = word.substring(index + sub.length);
        word = first + final + second;
        console.log(word);
      } else {
        console.log(`error`);
      }
    } else if (command === "ChangeAll") {
      let current = line[1];
      let replacement = line[2];
      while (word.includes(current)) {
        word = word.replace(current, replacement);
      }
      console.log(word);
    }
  }
  console.log(`You have a new text message: ${word}`);
}
solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
console.log(`============`);
solve([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
