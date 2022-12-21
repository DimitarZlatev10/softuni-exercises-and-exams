function solve(string) {
  let searchedWords = string.split(" ");

  for (let i = 0; i < searchedWords.length; i++) {
    let word = searchedWords[i];
    if (word[0].includes("#") && word.length > 1) {
      word = word.substring(1).split("");
      let flag = true;
      for (let char of word) {
        char = char.charCodeAt(0);
        if ((char >= 64 && char <= 90) || (char >= 97 && char <= 122)) {
          flag = true;
        } else {
          flag = false;
          break;
        }
      }
      if (flag) {
        console.log(searchedWords[i].substring(1));
      }
    }
  }
}
solve("Nowadays everyone uses # to tag a #s$ecial word in #socialMedia");
