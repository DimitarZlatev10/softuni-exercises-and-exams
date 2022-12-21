function solve(input) {
    let country = input[0]
    let dates = input[1]
    let sleeps = Number(input[2])
    let price =  0

    if(country == 'France'){
        if(dates =='21-23' ){
        price +=30
        }
        if(dates== '24-27'){
            price+=35
        }if(dates == '28-31'){
            price+=40
        }
    }
 if(country == 'Italy'){
    if(dates =='21-23' ){
    price +=28
    }
    if(dates== '24-27'){
        price+=32
    }if(dates == '28-31'){
        price+=39
    }
    }
    if(country == 'Germany'){
        if(dates =='21-23' ){
        price +=32
        }
        if(dates== '24-27'){
            price+=37
        }if(dates == '28-31'){
            price+=43
        }
    }

    let totalPrice = price * sleeps
    console.log(`Easter trip to ${country} : ${totalPrice.toFixed(2)} leva.`);
}

solve(["Italy", "21-23", "7"]);
