function solve(input){
let contract = input[0]
let type = input[1]
let mobileInternet = input[2]
let monthsPaying = Number(input[3])
let sum = 0
if(contract=='one'){
    if(type =='Small'){
        sum +=9.98
    }
}if(contract=='two'){
    if(type =='Small'){
        sum +=8.58
    }
}if(contract=='one'){
    if(type =='Middle'){
        sum +=18.99
    }
}if(contract=='two'){
    if(type =='Middle'){
        sum +=17.09
    }
}if(contract=='one'){
    if(type =='Large'){
        sum +=25.98
    }
}if(contract=='two'){
    if(type =='Large'){
        sum +=23.59
    }
}if(contract=='one'){
    if(type =='ExtraLarge'){
        sum +=35.99
    }
}if(contract=='two'){
    if(type =='ExtraLarge'){
        sum +=31.79
    }
}
if(mobileInternet=='yes'){
    if(sum<=10){
        sum+=5.50
    }else if(sum<=30){
        sum+=4.35
    }else if(sum>30){
        sum+=3.85
    }
}
sum = sum * monthsPaying
if(contract =='two'){
sum = sum - sum * 3.75 /100
}
console.log(`${Math.abs(sum).toFixed(2)} lv.`);
}
//solve (["one", "Small", "yes", "10"])
solve (["two", "Large", "no", "10"])