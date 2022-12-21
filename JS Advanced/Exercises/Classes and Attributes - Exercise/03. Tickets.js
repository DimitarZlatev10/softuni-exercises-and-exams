function solve(input, sortingCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }
  let result = [];
  for (let line of input) {
    let [destination, price, status] = line.split("|");
    let data = new Ticket(destination, price, status);
    result.push(data);
  }
  if(sortingCriteria==='destination'){
    return  result.sort((a,b)=> a.destination.localeCompare(b.destination))
  }else if (sortingCriteria==='price'){
      return result.sort((a,b)=> a.price-b.price)
  }else if (sortingCriteria==='status'){
      return result.sort((a,b)=> a.status.localeCompare(b.status))
  }
  
}
console.log(solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  ));
// solve(
//   [
//     "Philadelphia|94.20|available",
//     "New York City|95.99|available",
//     "New York City|95.99|sold",
//     "Boston|126.20|departed",
//   ],
//   "destination"
// );
