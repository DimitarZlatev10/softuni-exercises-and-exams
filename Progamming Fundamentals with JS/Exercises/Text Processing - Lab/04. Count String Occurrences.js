function solve(text, word) {
  let splitText = text.split(" ");
  let count = 0;
  for (let currWord of splitText) {
    if (currWord === word) {
      count++;
    }
  }
  console.log(count);
}
solve("A small sentence with some words", "small");
