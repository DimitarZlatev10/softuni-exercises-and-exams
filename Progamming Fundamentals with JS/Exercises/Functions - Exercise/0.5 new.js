function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    let reversed = arr[i].toString().split("").reverse().join("");
    if (Number(reversed) === arr[i]) {
      console.log(`true`);
    } else {
      console.log(`false`);
    }
  }
}
solve([123, 323, 421, 121]);
