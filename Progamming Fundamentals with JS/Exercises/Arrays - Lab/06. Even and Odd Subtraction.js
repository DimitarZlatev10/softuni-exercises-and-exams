function solve(arr){
    let evenSum = 0 
    let oddSum = 0 
    for (let i = 0; i< arr.length; i++) {
        arr[i]=Number(arr[i])
        if(arr[i]%2==1){
            oddSum+=arr[i]
        }else{
            evenSum+=arr[i]
        }
        
    }
console.log(evenSum-oddSum);
}
solve([1,2,3,4,5,6])
