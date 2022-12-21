function solve(input){
let width = input[0]
let length = input[1]
let height = input[2]
let totaleq = width*length*height
let i = 4 
let numbberOfRemainingLuggage = input[i]
let balance  = 0

while(numbberOfRemainingLuggage !=='Done'){
let sum = Number(numbberOfRemainingLuggage)
balance +=sum
i++
numbberOfRemainingLuggage = input[i]
if(totaleq<numbberOfRemainingLuggage)
    console.log(balance);
  break  


}


 







}
//solve(['10','10','2','20','20','20','20','122'])
solve(['10','1','2','4','6','Done'])