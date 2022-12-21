function solve(arr, n) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        let combination = []
        for (let j = i+1; j < arr.length; j++) {
            if(element+arr[j]===n){
                console.log(`${element} ${arr[j]}`);
            }
            
        }
    }
   
}

solve([1, 4, 2, 3, 14, 19, 8],
    10
    );
