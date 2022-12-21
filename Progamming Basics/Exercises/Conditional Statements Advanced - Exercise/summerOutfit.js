function  solve(input){
const degrees = Number(input[0])
const time = input[1]
let outfit ;
let shoes ;

if(degrees>=10&& degrees<=18){
    if(time=='Morning'){
        outfit = 'Sweatshirt'
        shoes = 'Sneakers'
    }
}else if(time=='Afternoon'){
    outfit= 'Shirt'
    shoes = 'Moccasins'
}else if (time=='Evening'){
    outfit= 'Shirt'
    shoes= 'Moccasins'
}
if(degrees>18&&degrees<=24){
    if(time=='Morning'){
        outfit='Shirt'
        shoes='Moccasins'
    } else if (time=='Afternoon'){
        outfit='T-shirt'
        shoes = 'Sandals'
    }else if (time=='Evening'){
        outfit = 'Shirt'
        shoes = 'Moccasins'
    }
    if(degrees>=25){
        if(time=='Morning'){
            outfit= 'T-shirt'
            shoes = 'Sandals'
        }else if (time=='Afternoon'){
            outfit= 'Swim Suit'
            shoes ='Barefoot'
        }else if (time=='Evening'){
            outfit = 'Shirt'
            shoes='Moccasins'
        }
    }
}
console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}
solve(['16','Morning'])
solve(['22','Afternoon'])
solve(['28','Evening'])

