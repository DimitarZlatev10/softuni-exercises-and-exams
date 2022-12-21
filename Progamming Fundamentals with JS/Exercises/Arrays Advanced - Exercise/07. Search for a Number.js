function solve ( array,modifiers){
let takeElements = modifiers[0]
let deleteElements = modifiers[1]
let searchElements = modifiers[2]
let afterTake = array.slice(0,takeElements)
let afterDelete = afterTake.splice(0,deleteElements)
let count = 0
for (let i = 0; i < afterTake.length; i++) {
   if(afterTake[i]===searchElements){
       count++
   }
    
}
console.log(`Number ${searchElements} occurs ${count} times.`);

}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )