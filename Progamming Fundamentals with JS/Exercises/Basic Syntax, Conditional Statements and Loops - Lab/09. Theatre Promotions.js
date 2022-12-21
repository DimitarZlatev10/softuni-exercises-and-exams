function solve(typeOfDay,age,price){
    if(typeOfDay==='Weekday'&&age>=0&&age<=18){
        price=12
        console.log(`${price}$`);
    }else if (typeOfDay==='Weekday'&&age>18&&age<=64){
        price=18
        console.log(`${price}$`);
    }else if (typeOfDay==='Weekday'&&age>64&&age<=122){
        price=12
        console.log(`${price}$`);
    } if(typeOfDay==='Weekend'&&age>=0&&age<=18){
        price=15
        console.log(`${price}$`);
    }else if (typeOfDay==='Weekend'&&age>18&&age<=64){
        price=20
        console.log(`${price}$`);
    }else if (typeOfDay==='Weekend'&&age>64&&age<=122){
        price=15
        console.log(`${price}$`);
    }    if(typeOfDay==='Holiday'&&age>=0&&age<=18){
        price=5
        console.log(`${price}$`);
    }else if (typeOfDay==='Holiday'&&age>18&&age<=64){
        price=12
        console.log(`${price}$`);
    }else if (typeOfDay==='Holiday'&&age>64&&age<=122){
        price=10
        console.log(`${price}$`);
    }else if (age<0||age>122){
        console.log('Error!');
    }
}
solve('Holiday',-12)