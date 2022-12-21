function solve(array) {
  let guestList = {
    vip: [],
    regular: [],
  };
  let guest = array.shift();
  while (guest !== "PARTY") {
    let firstChar = guest[0];
    if (isNaN(firstChar)) {
      guestList.regular.push(guest);
    } else {
      guestList.vip.push(guest);
    }
    guest = array.shift();
  }
  for (let line of array) {
    if (guestList.vip.includes(line)) {
      let index = guestList.vip.indexOf(line);
      guestList.vip.splice(index, 1);
    } else if (guestList.regular.includes(line)) {
      let index = guestList.regular.indexOf(line);
      guestList.regular.splice(index, 1);
    }
  }
  let vipCount = guestList.vip.length
  let regularCount = guestList.regular.length
  console.log(regularCount+vipCount);
  console.log(guestList.vip.join('\n'));
  console.log(guestList.regular.join('\n'));
}
solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
