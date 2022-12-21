function solve(array) {
  let cardPower = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let cardType = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  let final = {};
  let assocArr = {};
  let cardHolder = [];
  for (let line of array) {
    let [name, cardDec] = line.split(": ");
    let cards = cardDec.split(", ");
    if (!assocArr.hasOwnProperty(name)) {
      assocArr[name] = cards.toString();
    } else {
      assocArr[name] += "," + cards;
    }
  }
  for (let elem in assocArr) {
    cardHolder = [];
    let sum = 0;
    let name = elem;
    let cards = assocArr[elem].split(",");
    for (let card of cards) {
      if (card.length === 2) {
        let [power, typeCard] = card.split("");
        if (!cardHolder.includes(card)) {
          cardHolder.push(card);
          sum += Number(cardPower[power]) * Number(cardType[typeCard]);
        }
      } else {
        let [power, other, type] = card.split("");
        if (!cardHolder.includes(card)) {
            cardHolder.push(card)
            powerCard = power + other;
          sum +=  Number(cardType[type]) * Number(cardPower[powerCard])
        }
      }
    }
    if (!final.hasOwnProperty(name)) {
      final[name] = sum;
    }
  }
  for (let row in final) {
    console.log(`${row}: ${final[row]}`);
  }
}
solve(["Tomas: 3H, 10S, JC, KD, 5S, 10S", "Tomas: 6H, 7S, KC, KD, 5S, 10C"]);
