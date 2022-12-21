function solve(array){
let lengthSort = array.sort((a,b)=>a.length-b.length||a.localeCompare(b))

console.log(lengthSort.join(' \n'));
}
solve(["a", "bb", "aa"])