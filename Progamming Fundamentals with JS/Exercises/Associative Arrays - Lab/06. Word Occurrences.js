function solve(array){
let words = {}
for (let line of array) {
    let word = line
    if(words.hasOwnProperty(word)){
        words[word] +=1
    }else{
        words[word] = 1
    }   
}
let output = Object.entries(words).sort((a,b)=> b[1] - a[1] )
for (let [name , value] of output) {
    console.log(`${name} -> ${value} times`);
    
}
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])