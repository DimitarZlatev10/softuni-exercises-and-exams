function solve(input){
let words = input.shift()
let checkWords = input.shift()
let command = input.shift()
let dictionary = {}
for (let line of words.split(' | ')) {
    line = line.split(': ')
    let word = line[0]
    let text = line[1]
    if(!dictionary.hasOwnProperty(word)){
        dictionary[word] = {
            text : ''
        }
    }
    dictionary[word].text += `${text}|`
}
if(command==='Hand Over'){
    let keys = Object.keys(dictionary)
    console.log(keys.join(' '));
}else if (command==='Test'){
    // let entries = Object.entries(dictionary)
    for (let line of checkWords.split(' | ')) {
        if(dictionary.hasOwnProperty(line)){
            console.log(`${line}:`);
            let printedWord = dictionary[line].text
            printedWord = printedWord.split('|')
            for (let line of printedWord) {
                if(line.length>0){
                    console.log(`-${line}`);
                }
            }
        }
        
    }
}


}
solve(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
"care | kitchen | flower",
"Test"])
solve(["programmer: an animal, which turns coffee into code | developer: a magician",
"fish | domino",
"Hand Over"])
