function solve(elements){
    let text = []
   for(let i = elements.length-1;i>=0;i--){
      text.push(elements[i])

   }
   console.log(text.join(' '));

}
solve(['a', 'b', 'c', 'd', 'e'])