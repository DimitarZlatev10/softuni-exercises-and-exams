function solve(arr) {
    let holder = []
  for (let i = 0; i < arr.length; i++) {
     if(arr[i]==='add'){
      holder.push(i+1)
     }else if (arr[i]==='remove'){
         holder.pop()
     }
  }
  if(holder.length<=0){
      console.log(`Empty`);
  }else{

      console.log(holder.join(' '));
  }
}
solve(["add", "add", "add", "add"]);
solve(['add', 'add', 'remove', 'add', 'add'])
solve(['remove', 'remove', 'remove'])