function solve(arr,times){
    for(let i = 0;i<times;i++){
       let element = arr.shift()
            arr.push(element)

    }
    console.log(arr.join(' '));

}
solve([51, 47, 32, 61, 21], 2)