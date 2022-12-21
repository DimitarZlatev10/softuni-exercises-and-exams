function solve(array) {
   let arrayMultiply = array.map(x=>x*1000).map(Number)
   let food = arrayMultiply.shift() 
   let hay = arrayMultiply.shift() 
   let cover = arrayMultiply.shift() 
   let pigKg = arrayMultiply.shift() 
   let days = 1

   while(days<=30){
       
       food -=300
       if(food<0){
           console.log(`Merry must go to the pet store!`);
           break
       }
       if(days%2==0){
           let restOfFood = food *0.05
           hay-=restOfFood
          
           if(hay<0){
               console.log(`Merry must go to the pet store!`);
               break
           }
       } if (days%3==0){
           let putCover = pigKg / 3 
           cover -= putCover
          
           if(cover<0){
               console.log(`Merry must go to the pet store!`);
               break
           }
       }
       days++
   }
   if(food>=0&&hay>=0&&cover>=0){
           food /=1000
           hay /=1000
           cover /=1000
           console.log(`Everything is fine! Puppy is happy! Food: ${(food).toFixed(2)}, Hay: ${(hay).toFixed(2)}, Cover: ${(cover).toFixed(2)}.`);
   }
//    if(days===30){
//        food /=1000
//        hay /=1000
//        cover /=1000
//        console.log(`Everything is fine! Puppy is happy! Food: ${(food).toFixed(2)}, Hay: ${(hay).toFixed(2)}, Cover: ${(cover).toFixed(2)}.`);
//    }
   
}
solve((["10", 
"5", 
"5.2", 
"1"])
)