function solve(input){
let price = 0
let productName=input[0]
let town = input[1]
let quantity = Number(input[2])

if (town=='Varna'){
if (productName=='coffee'){
price = 0.45    
}
else if (productName=='water'){
    price = 0.70
}
else if (productName=='beer'){
    price = 1.10
}
else if (productName=='sweets'){
    price = 1.35
}
else if (productName=='peanuts'){
    price = 1.55
}
}
if(town=='Plovdiv'){
 if(productName=='coffee'){
     price= 0.40
 }
 else if (productName=='water')
 price = 0.70
 else if (productName=='beer')
 price = 1.15
 else if (productName=='sweets')
price = 1.30
else if (productName=='peanuts'){
    price=1.50
}
}
if(town=='Sofia'){
    if(productName=='coffee'){
    price=0.50
    }
    else if (productName=='water'){
    price=0.80
    }
    else if (productName=='beer'){
        price = 1.20
    }
    else if (productName=='sweets'){
        price = 1.45
    }
    else if (productName=='peanuts'){
        price =1.60
    }
}
let totalPrice=(quantity*price)
console.log(totalPrice);

}
solve(['coffee','Varna','2'])
solve(['peanuts','Plovdiv','1'])
solve(['beer','Sofia','6'])
