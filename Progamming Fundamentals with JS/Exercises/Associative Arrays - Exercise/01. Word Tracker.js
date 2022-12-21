function solve(array) {
let words = {}
let checkWords = array.shift().split(' ')
checkWords.forEach(word => words[word] = 0);
for (let line of array) {
    let wordd = line
    if(words.hasOwnProperty(wordd)){
        words[wordd] +=1
    }
    
}
let output = Object.entries(words).sort((a,b)=> b[1]-a[1])
for (let [key,value] of output) {
    console.log(`${key} - ${value}`);
    
}
}
solve([
    'this sentence ', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )
    solve([
        'is the', 
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
        )