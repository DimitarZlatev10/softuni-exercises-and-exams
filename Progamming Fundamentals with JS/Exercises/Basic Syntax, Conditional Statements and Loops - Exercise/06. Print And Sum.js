function solve(n,m){
let sum =0
let s = " "
for(i=n;i<=m;i++){
    s += i + " ";
    
    sum+=i
}
console.log(s);
console.log(`Sum: ${sum}`);

}
solve(5,10)