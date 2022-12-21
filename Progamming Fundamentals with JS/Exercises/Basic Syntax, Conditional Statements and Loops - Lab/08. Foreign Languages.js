function solve(country,language){
if(country==='England'||country==='USA'){
    language='English'
    console.log(language);
}else if (country==='Spain'||country==='Mexico'||country==='Argentina'){
    language='Spanish'
    console.log(language);
}else{
    console.log('unknown');
}
}
solve('USA')