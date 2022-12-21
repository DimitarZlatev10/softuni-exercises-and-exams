function solve(n,arrNums){
    let arr = []
    for(let i =0; i<n;i++){
    arr.push(arrNums[i])
    }
    let output=[]
    for(let i = arr.length-1 ; i>=0;i--){
      output.push(arr[i])
    }
    console.log(output.join(' '));
}
solve(3, [10, 20, 30, 40, 50])