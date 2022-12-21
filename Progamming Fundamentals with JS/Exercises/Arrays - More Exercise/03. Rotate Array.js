function solve(arr) {
    let rotations = Number(arr[arr.length-1])
    arr.pop()
    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop())
        
    }
    console.log(arr.join(' '));

    
}
solve(['1', '2', '3', '4', '2'])
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
// let rotations = arr[arr.length-1];
//     arr.pop()

//     if (isNaN(rotations)){
//         console.log('Empty');
//     } else {
//         for (let i = 0; i < rotations; i++) {
//             arr.unshift(arr.pop());
//         }
//         console.log(arr.join(' '))
//     }