function solve(input) {
  let codedWord = input.shift();
  input.pop();
  for (let line of input) {
    line = line.split("|");
    let command = line[0];
    if (command === "Move") {
      let number = Number(line[1]);
      let end = codedWord.substring(0, number);
      let start = codedWord.substring(number);
      codedWord = start + end;
    } else if (command === "Insert") {
      let number = Number(line[1]);
      let letter = line[2];
      let start = codedWord.substring(0, number);
      let end = codedWord.substring(number);
      codedWord = start + letter + end;
    } else if (command === "ChangeAll") {
      let currentWord = line[1];
      let replacingWord = line[2];
      while (codedWord.includes(currentWord)) {
        codedWord = codedWord.replace(currentWord, replacingWord);
      }
    }
  }
  console.log(`The decrypted message is: ${codedWord}`);
}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]
  )
