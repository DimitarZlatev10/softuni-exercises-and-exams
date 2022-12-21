function solve(input) {
  let text = input[0];
  let upperOrLower = input[1];
  let sum = 0;
  for (let ch of text) {
    let ascii = ch.charCodeAt(0);
    if (upperOrLower === "LOWERCASE") {
      if (ascii >= 97 && ascii <= 122) {
        sum += ascii;
      }
    } else if (upperOrLower === "UPPERCASE") {
      if (ascii >= 65 && ascii <= 90) {
        sum += ascii;
      }
    }
  }
  console.log(`The total sum is: ${sum}`);
}
solve(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
solve(["AC/DC", "UPPERCASE"]);
