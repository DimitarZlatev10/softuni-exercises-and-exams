function solve(a, b) {
  let first = a.charCodeAt();
  let second = b.charCodeAt();
  let line = " ";
  if (first < second) {
    for (let i = first + 1; i < second; i++) {
      line += String.fromCharCode(i) + " ";
    }
    console.log(line);
  }else if (second<first){
      for (let i = second+1; i < first; i++) {
        line += String.fromCharCode(i) + " ";
          
      }
      console.log(line);
  }
}
solve("d", "a");
