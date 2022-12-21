function solve(stock , ordered){
let shop = {}
for (let i = 0; i < stock.length; i+=2) {
    const product = stock[i];
    shop[product] = Number(stock[ i + 1 ])
}for (let i = 0; i < ordered.length; i+=2) {
    const product = ordered[i];
    if(!shop.hasOwnProperty(product)){
        shop[product] = 0
    }
      shop[product] += Number(ordered[i + 1])
}
for (const key in shop) {
    console.log(`${key} -> ${shop[key]}`);
    
}
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )