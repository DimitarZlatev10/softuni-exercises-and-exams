function solve(text){
    let wordCount = text.toString().split(' ').length
    if(wordCount>10){
        console.log(`The message is too long to be send! Has ${wordCount} words.`);
    }else {
        console.log(`The message was sent successfully!`);
    }
    

 




}
solve(["This message has exactly eleven words. One more as it's allowed!"])
solve(["This message has ten words and you can send it!"])
