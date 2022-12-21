function solve(input) {
  let products = {};
  for (let i = 0; i < input.length; i += 2) {
    let product = input[i];
    let quantity = Number(input[i + 1]);
    if (!products[product]) {
      products[product] = quantity;
    }
  }
  console.log(products);
}
solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
