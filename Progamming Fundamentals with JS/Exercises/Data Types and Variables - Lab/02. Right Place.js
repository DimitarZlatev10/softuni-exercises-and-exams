function solve(word,symbol,compare){
    word = word.replace('_',symbol)
    if(word===compare){
        console.log(`Matched`);
    }else{
        console.log(`Not Matched`);
    }
    

}
solve('Str_ng', 'i', 'String')