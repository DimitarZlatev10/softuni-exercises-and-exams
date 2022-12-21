function solve(n){
    let holder = []
    let count = 0 
for (let cols = n; cols < n*2; cols++) {
    
    for (let rows = n; rows < n*2; rows++) {
        holder.push(n)
        count++
        if(count===n){
            console.log(holder.join(' '));
            count = 0
            holder=[]
        }
        
    }
    
}


}
solve(7)