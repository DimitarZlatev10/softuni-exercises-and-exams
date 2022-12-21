function solve(input) {
  let nums = input.shift();
  const regEx = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
  for (let line of input) {
    let match = regEx.exec(line);
    if (match) {
      let barcode = "";
      let product = match[0];
      for (let ch of product) {
        ch = Number(ch);
        if (ch * 1 === ch) {
          barcode += ch;
        }
      }
      if (barcode === "") {
        console.log(`Product group: 00`);
      } else {
        console.log(`Product group: ${barcode}`);
      }
    } else {
      console.log(`Invalid barcode`);
    }
  }
}
solve(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
solve([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
