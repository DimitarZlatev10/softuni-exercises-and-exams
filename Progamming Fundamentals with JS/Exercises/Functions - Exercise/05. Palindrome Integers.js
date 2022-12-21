function polindrome(arr) {

  function isPlindrome(n) {
    let reversedN = n.toString().split("").reverse().join("");
    return Number(reversedN) === n ? true : false;
  }
  let printlines = "";
  for (const n of arr) {
    printlines += isPlindrome(n) + '\n';
  }

  return printlines

}
let result = polindrome([123,323,421,121])
console.log(result);
