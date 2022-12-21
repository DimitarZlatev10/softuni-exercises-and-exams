function solve(input) {
  let text = input[0];
  let regExEmoji = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/g;
  let digitsRegEx = /\d/g;
  let treshold = 1;
  let digits = text.match(digitsRegEx);
  digits.map((d) => (treshold *= Number(d)));
  console.log(`Cool threshold: ${treshold}`);
  let emojis = [];
  
  console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
  for (let emoji of emojis) {
    let sum = 0;
    for (let ascii of emoji[2]) {
      sum += ascii.charCodeAt(0);
    }
    if (sum >= treshold) {
      console.log(emoji[0]);
    }
  }
}

solve([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
