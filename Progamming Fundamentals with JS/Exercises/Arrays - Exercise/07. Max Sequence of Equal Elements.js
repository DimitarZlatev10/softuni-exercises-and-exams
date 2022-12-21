function solve(arr){
let longest = []
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let currentLongest = [element]
    for (let j = i+1; j < arr.length; j++) {
        if(element==arr[j]){
            currentLongest.push(element)

        }else{
            break
        }
       
        
    }
    if(longest.length<currentLongest.length){
        longest = currentLongest
    }
}
console.log(longest.join(' '));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])