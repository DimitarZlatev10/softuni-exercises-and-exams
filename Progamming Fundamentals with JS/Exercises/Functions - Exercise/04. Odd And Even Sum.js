function solve(numbers) {
 let n =numbers.toString().split('')
 let evenSum = 0
 let oddSum = 0
 for (let i = 0; i < n.length; i++) {
     n[i]=Number(n[i])
     if(n[i]%2===0){
         evenSum+=n[i]
     }else{
         oddSum+=n[i]
     }
     
 }
 console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(3495892137259234);
