function solve(input){
let days = Number(input[0]) -1
let typeRoom = input[1]
let review = input[2]
let sum = 0

if(typeRoom =='room for one person'){
   sum+=18*days
}
if(typeRoom== 'apartment'){
    sum +=25*days
    if(days < 10){
        sum = sum - sum * 0.30
    }else if (days >=10 && days <=15){
        sum = sum - sum * 0.35
    }else if (days>15){
        sum = sum -sum *0.50
    }
}if(typeRoom== 'president apartment'){
    sum +=35*days
    if(days < 10){
        sum = sum - sum * 0.10
    }else if (days >=10 && days <=15){
        sum = sum - sum * 0.15
    }else if (days>15){
        sum = sum -sum *0.20
    }
}
if(review =='positive'){
    sum = sum + sum *0.25
}else if (review =='negative'){
    sum = sum - sum* 0.10
}
console.log(sum.toFixed(2));
}
solve (["14", "apartment", "positive"])