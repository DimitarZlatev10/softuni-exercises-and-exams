function solve(input) {
let fruit = input[0]
let day = input[1]
let quantity = input[2]
let sum = 0
  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
  
  if (fruit === "banana") 
    sum = 2.5 * quantity;
   else if (fruit === "apple") 
    sum = 1.2 * quantity;
   else if (fruit === "orange") 
   sum = 0.85* quantity
   else if (fruit === "grapefruit") 
    sum = 1.45 * quantity;
   else if (fruit === "kiwi") 
    sum = 2.7 * quantity;
   else if (fruit === "pineapple") 
    sum = 5.5 * quantity;
   else if (fruit === "grapes") 
    sum = 3.85 * quantity;
  
  }
  if (day === "Saturday" || day === "Sunday") {
    if (fruit === "banana") 
    sum = 2.7 * quantity;
   else if (fruit === "apple") 
    sum = 1.25 * quantity;
   else if (fruit === "orange") 
    sum = 0.9 * quantity;
     else if (fruit === "grapefruit") 
    sum = 1.6 * quantity;
   else if (fruit === "kiwi") 
    sum = 3.0 * quantity;
   else if (fruit === "pineapple") 
    sum = 5.6 * quantity;
   else if (fruit === "grapes") 
    sum = 4.2 * quantity;
  }
  if(sum>0){
    console.log(sum.toFixed(2));
  }else{
    console.log(`error`);
  }
  
 

}
solve(["apple", "Tuesday", "2"]);
solve(["apple", "Monday", "2"]);
solve(["tomato", "Monday", "0.5"]);
solve(["orange", "Sunday", "3"]);
