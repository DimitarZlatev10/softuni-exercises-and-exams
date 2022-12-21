function solve(input) {
  let holder = [];
  let count = 1;
  for (let line of input) {
    if (line === "add") {
      holder.push(count);
    } else if (line === "remove") {
      holder.pop();
    }
    count++;
  }
  if(holder.length===0){
      console.log(`Empty`);
  }else{

      console.log(holder.join('\n'));
  }
}
solve(["add", "add", "add", "add"]);
solve(['add', 
'add', 
'remove', 
'add', 
'add']
)
