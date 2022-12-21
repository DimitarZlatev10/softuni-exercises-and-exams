function solve(input){
let text = input.shift()
let removeWord = input.shift()
while(removeWord.length>0){
    let startIndex = text.indexOf(removeWord)
    let endIndex = text.lastIndexOf(removeWord)
    if((startIndex>-1&&endIndex>-1) && startIndex!==endIndex){
        text = text.split('')
        text.splice(startIndex,removeWord.length)
        text = text.join('')
        endIndex = text.lastIndexOf(removeWord)
        text = text.split('')
        text.splice(endIndex,removeWord.length)
        let remove= removeWord[Math.floor(removeWord.length/2)]
        removeWord = removeWord.replace(remove,'')
        text = text.join('')

        console.log(`Shaked it.`);

    }else{
        break
    }
}
console.log('No shake.');
    console.log(text);
}
// solve(['astalavista baby',
// 'sta']
// )
solve(['##mtm!!mm.mm*mtm.#',
'mtm']
)