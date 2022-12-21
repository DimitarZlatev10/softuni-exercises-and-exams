function solve(input) {
  let vowels = ["a", "e", "i", "o", "u"];
  let concatenatedWord = input[0].concat(input[1]);
  let vowelsWord = input[2].toUpperCase().split("");
  let count = 0;
  for (let ch of concatenatedWord) {
    if (vowels.includes(ch)) {
     concatenatedWord = concatenatedWord.replace(ch, vowelsWord[count]);
      count++;
      if (count > vowelsWord.length-1) {
        count = 0;
      }
    }
  }
  let reversed = concatenatedWord.split('').reverse().join('')
  console.log(`Your generated password is ${reversed}`);
}
solve(["ilovepizza", "ihatevegetables", "orange"]);
