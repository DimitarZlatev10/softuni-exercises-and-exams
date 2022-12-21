function solve(arr1,arr2){
    let sum = 0
    let sum1= 0
    for (let index = 0; index < arr1.length; index++) {
        arr1[index]=Number(arr1[index])
        sum+=arr1[index]
        
    }
    for (let index = 0; index < arr2.length; index++) {
        arr2[index]=Number(arr2[index])
        sum1+=arr2[index]

        
    }
    for (let index = 0; index < arr1.length; index++) {
       if(arr1[index]!==arr2[index]){
           console.log(`Arrays are not identical. Found difference at ${index} index`);
           break
       }
        
    }
    if(sum===sum1){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['10','20','30'], ['10','20','30'])
solve (['1','2','3','4','5'], ['1','2','4','4','5'])