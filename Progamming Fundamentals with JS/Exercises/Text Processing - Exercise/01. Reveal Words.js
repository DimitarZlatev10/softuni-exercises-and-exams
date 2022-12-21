function solve(words, text) {
  words = words.split(", ");
  while (text.includes("*")) {
    let word = words.shift();

    text = text.replace("*".repeat(word.length), word);
  }
  console.log(text);
}
solve("great", "softuni is ***** place for learning new programming languages");
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
