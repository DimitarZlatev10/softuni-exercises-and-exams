function solve(input){
let age = Number(input[0])
let washingMachinePrice = Number(input[1])
let costForOneToy = Number(input[2])
let sum = 0

for(let i= 1 ; i<=age;i++){
    if(i % 2===0){
     sum += i*5
     sum--
    }
    else{
        sum += costForOneToy 
    }
    
}
 if(sum>=washingMachinePrice){
    sum = Math.abs(sum - washingMachinePrice)
    console.log(`Yes! ${sum.toFixed(2)}`);
}else{
    sum = Math.abs(sum - washingMachinePrice)
    console.log(`No! ${sum.toFixed(2)}`);
}





}
solve(['10','170','6'])
solve(['21','1570.98','3'])
