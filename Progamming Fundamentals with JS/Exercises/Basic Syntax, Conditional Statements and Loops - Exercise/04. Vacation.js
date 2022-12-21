function solve(people,type,day){
let price = 0
    if(type==='Students'&&day==='Friday'){
      price=8.45*people
    }else if (type==='Students'&&day==='Saturday'){
        price=9.80*people
    }else if (type==='Students'&&day==='Sunday'){
        price=10.46*people
    }if(type==='Students'&&people>=30){
        price*=0.85
    }if(type==='Bussines'&&day==='Friday'){
        price=10.90
      }else if (type==='Bussines'&&day==='Saturday'){
          price=15.60
      }else if (type==='Bussines'&&day==='Sunday'){
          price=16
      
      }if(type==='Bussines'&&people>=100){
          people-=10
          price*=people
      }else if (type==='Bussines'&&people<100){
          price*=people
      }
      if(type==='Regular'&&day==='Friday'){
        price=15*people
      }else if (type==='Regular'&&day==='Saturday'){
          price=20*people
      }else if (type==='Regular'&&day==='Sunday'){
          price=22.50*people
      }if(type==='Regular'&&people>=10&&people<=20){
          price*=0.95
      }
      console.log(`Total price: ${price.toFixed(2)}`);
}
solve(90,
    "Bussines",
    "Sunday"
    )
    solve(40,
        "Regular",
        "Saturday"
        )