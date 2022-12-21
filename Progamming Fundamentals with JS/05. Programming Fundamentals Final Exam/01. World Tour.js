function solve(input) {
  let text = input.shift();
  input.pop();
  for (let line of input) {
    line = line.split(":");
    let command = line[0];
    if (command === "Add Stop") {
      let index = Number(line[1]);
      let cityName = line[2];
      if (index >= 0 && index <= text.length - 1) {
        let firstPart = text.substring(0, index);
        let secondPart = text.substring(index);
        text = firstPart + cityName + secondPart;
    }
    console.log(text);
    } else if (command === "Remove Stop") {
      let startIndex = Number(line[1]);
      let endIndex = Number(line[2]);
      if (
        startIndex >= 0 &&
        startIndex <= text.length - 1 &&
        endIndex >= 0 &&
        endIndex <= text.length - 1
      ) {
        text = text.split("");
        for (let i = startIndex; i <= endIndex; i++) {
          delete text[i];
        }
        text = text.join("");
    }
    console.log(text);
    } else if (command === "Switch") {
      let oldString = line[1];
      let newString = line[2];
      if(text.includes(oldString)){
        text = text.replace(oldString,newString)
    }
    //   while (text.includes(oldString)) {
    //     text = text.replace(oldString, newString);
    //   }
      console.log(text);
    }
  }
  console.log(`Ready for world tour! Planned stops: ${text}`);
}
solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
