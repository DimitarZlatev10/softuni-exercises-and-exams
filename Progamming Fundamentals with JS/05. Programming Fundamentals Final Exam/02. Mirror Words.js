function solve(input) {
  let matches = [];
  let mirrored = [];
  let regEx = /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
  let isValid;
  while ((isValid = regEx.exec(input))) {
    let first = isValid[2];
    let second = isValid[3].split("").reverse().join("");
    if (first === second) {
      mirrored.push(`${isValid[2]} <=> ${isValid[3]}`);
      matches.push(isValid[0]);
    } else {
      matches.push(isValid[0]);
    }
  }
  if (matches.length === 0) {
    console.log(`No word pairs found!`);
  } else {
    console.log(`${matches.length} word pairs found!`);
  }
  if (mirrored.length === 0) {
    console.log(`No mirror words!`);
  } else {
    console.log(`The mirror words are:`);
    console.log(mirrored.join(", "));
  }
}
solve([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
