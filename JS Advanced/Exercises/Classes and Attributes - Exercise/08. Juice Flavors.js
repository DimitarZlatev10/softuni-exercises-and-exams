function solve(input) {
  let quantityOfProducts = {};
  let bottles = {}

  for (let line of input) {
    line = line.split(" => ");
    let productName = line[0];
    let productQuantity = Number(line[1]);
    if (!quantityOfProducts.hasOwnProperty(productName)) {
      quantityOfProducts[productName] = {
        quantity: 0,
      };
    }
    quantityOfProducts[productName].quantity += productQuantity;
    if(quantityOfProducts[productName].quantity>=1000){
        while(quantityOfProducts[productName].quantity>=1000){
            if(!bottles.hasOwnProperty(productName)){
                bottles[productName]= {
                    bottlesQuantity:0
                }
            }
            quantityOfProducts[productName].quantity-=1000
            bottles[productName].bottlesQuantity+=1
        }
    }
   
    }

    let entries = Object.entries(bottles)
    for (let entry of entries) {
        console.log(`${entry[0]} => ${entry[1].bottlesQuantity}`);
        
}
  }
   
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);

