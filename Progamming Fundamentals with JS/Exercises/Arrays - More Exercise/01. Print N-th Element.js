function solve(arr){
let n = Number(arr[arr.length-1].split())
let holder = []
for (let index = n; index <arr.length-1; index+=2) {
   if(index===n){
       holder.push(arr[0])
       
   }
   holder.push(arr[index])
   
   
}
if(n>=arr.length){
    holder.push(arr[0])
    
}
console.log(holder.join(' '));

}
solve(['5', '20', '31', '4', '20', '2'])
solve(['dsa', 'asd', 'test', 'test', '2'])
solve(['1', '2', '3', '4', '5', '6'])