function solve(array) {
    let discount = 0
    let typeOfCustomer = array.pop()
    let priceForParts = array.map(Number).filter(number=> number>0).reduce((calc,current)=> calc+current,0)
    let invalidPrice = array.map(Number).filter(number=> number<=0)
    let tax = priceForParts * 0.20
    let finalPrice = priceForParts+tax
    if(typeOfCustomer==='special') discount = finalPrice *0.90
    for (let i = 0; i < invalidPrice.length; i++) {
        console.log(`Invalid price!`);
        
    }
    if(finalPrice<=0){
        console.log(`Invalid order!`);
    }else{
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${(priceForParts).toFixed(2)}$`);
        console.log(`Taxes: ${(tax).toFixed(2)}$`);
        console.log(`-----------`);
        if(typeOfCustomer==='special'){
            console.log(`Total price: ${(discount).toFixed(2)}$`);
        }else{
           console.log(`Total price: ${(finalPrice).toFixed(2)}$`); 
        }
        
    }
     
    

   
    
}
solve(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    )
    
//  solve([
//     'regular'
//     ])
    