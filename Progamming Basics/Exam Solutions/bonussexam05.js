function solve(input){

let food = Number(input[0]) * 1000


for (let i = 1 ;  i <= input.length ; i++){
    if(input[i]=='Adopted'){
        break;
    }
    let dailyFood = Number(input[i])
    food -=dailyFood
    }
if(food>=0){
    console.log(`Food is enough! Leftovers: ${food} grams.`);
}
else {
    console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`);
}



}
solve(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
solve(["3", "1000","1000", "1000", "Adopted"])
solve (["2", "999", "456", "999", "999",'123','456','Adopted'])