function solve(input) {
  let rawKey = input.shift();
  for (let command of input) {
    command = command.split(">>>");
    if (command[0] === "Generate") {
        console.log(`Your activation key is: ${rawKey}`);
      break;
    }
    if (command[0] === "Contains") {
      if (rawKey.includes(command[1])) {
        console.log(`${rawKey} contains ${command[1]}`);
      } else {
        console.log(`Substring not found!`);
      }
    } else if (command[0] === "Flip") {
      rawKey = rawKey.split("");
      if (command[1] === "Upper") {
        for (let i = Number(command[2]); i < Number(command[3]); i++) {
          rawKey[i] = rawKey[i].toUpperCase();
        }
      } else if (command[1] === "Lower") {
        for (let i = Number(command[2]); i < Number(command[3]); i++) {
          rawKey[i] = rawKey[i].toLowerCase();
        }
      }
      rawKey = rawKey.join("");
      console.log(rawKey);
    } else if (command[0] === "Slice") {
      rawKey = rawKey.split("");
       rawKey.splice(Number(command[1]), Number(command[2])-Number(command[1]));
      rawKey = rawKey.join("");
      console.log(rawKey);
    }
  }
}
// solve([
//   "abcdefghijklmnopqrstuvwxyz",
//   "Slice>>>2>>>6",
//   "Flip>>>Upper>>>3>>>14",
//   "Flip>>>Lower>>>5>>>7",
//   "Contains>>>def",
//   "Contains>>>deF",
//   "Generate",
// ]);
// console.log(`-----------`);
solve(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

