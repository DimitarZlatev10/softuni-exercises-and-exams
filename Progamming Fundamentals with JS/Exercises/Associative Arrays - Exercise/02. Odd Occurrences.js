function solve(array) {
  array = array.toLowerCase().split(" ");
  let assocArr = {};
  for (let line of array) {
    let word = line;
    if (!assocArr.hasOwnProperty(word)) {
      assocArr[word] = 1;
    } else {
      assocArr[word] += 1;
    }
  }
  let entries = Object.entries(assocArr)
  let output = []
  for (let [key,value] of entries) {
      if(value%2 !==0){
          output.push(key)
      }
      
      
  }
  console.log(output.join(' '));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
solve('Cake IS SWEET is Soft CAKE sweet Food')
