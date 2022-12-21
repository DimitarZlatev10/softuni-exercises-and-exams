function solve(elements1,elements2){
   
 for (const firstEl of elements1) {
     for (const secondEl of elements2) {
         if(firstEl===secondEl){
             console.log(firstEl);
         }
     }
     
 }
         
         
     
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)