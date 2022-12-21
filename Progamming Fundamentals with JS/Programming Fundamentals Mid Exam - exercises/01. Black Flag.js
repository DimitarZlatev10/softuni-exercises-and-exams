function solve(array){
let days = Number(array.shift())
let dailyPlunder = Number(array.shift())
let expectedPlunder = Number(array.shift())
let totalPlunder = 0

for (let i = 1; i <= days; i++) {
    totalPlunder+=dailyPlunder
    if(i%3===0&&i!=0){
        totalPlunder +=(dailyPlunder*0.5)
    } if (i%5===0&&i!=0){
        totalPlunder -= (totalPlunder*0.3)
    } 
      
    
    
    
}
if(totalPlunder>=expectedPlunder){
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
}else {
    let percentage = totalPlunder / expectedPlunder *100
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
}

}
solve((["5",
"40",
"100"])
)
// let percentage = total / expectedPlunder * 100;