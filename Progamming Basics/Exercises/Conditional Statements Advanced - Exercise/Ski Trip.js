function solve(input) {
    let days = Number(input[0])
    let typeOfApartament = input[1]
    let review = input[2]
    let nights = days-1
    let sum = 0
    if(typeOfApartament=='room for one person'){
        sum+= 18 * nights 
        if(review =='positive'){
            sum = sum + sum * 0.25
        }else if (review =='negative'){
            sum = sum-sum * 0.10
        }    
    }else if (typeOfApartament =='apartment'){
        sum+= 25*nights
        if(nights <10){
            sum = sum - sum * 0.30
        }else if (nights >10 && nights <15){
            sum = sum - sum * 0.35
        }else if (nights >15){
            sum =  sum- sum * 0.50
        }
        if(review =='positive'){
            sum = sum+sum *0.25
        }else if (review=='negative'){
            sum =sum-sum *0.10
        }
    }else if (typeOfApartament=='president apartment'){
        sum += 35 * nights 
        if(nights <10){
            sum = sum - sum * 0.10
        }else if (nights >10 && nights <15){
            sum = sum - sum * 0.15
        }else if (nights >15){
            sum =  sum- sum * 0.20
        }
        if(review =='positive'){
            sum = sum+sum *0.25
        }else if (review=='negative'){
            sum =sum-sum *0.10
        }
    }
    console.log(sum.toFixed(2));
}
solve(["14", "apartment", "positive"]);
solve(["30", "president apartment", "negative"]);
solve(["12", "room for one person", "positive"]);
