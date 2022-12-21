function solve(n){

 n = n.toString()
 let sum = 0
 for(i=0;i<=n.length-1;i++){
     sum+=Number(n[i])

 }
 console.log(sum);
  

}
solve(245678)