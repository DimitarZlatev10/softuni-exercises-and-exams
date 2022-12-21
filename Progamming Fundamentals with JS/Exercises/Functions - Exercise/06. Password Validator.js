function solve(password){
    let isLetterDigit=true
    let count =0
    let digitCount=0
if(password.length<6||password.length>10){
    console.log(`Password must be between 6 and 10 characters`);
}else{
    count++
}
for (const char of password) {
    
    let ascii = char.charCodeAt()
    if(ascii <48 ||ascii >57&&ascii<65||ascii>90&&ascii<97||ascii>122){
            isLetterDigit = false
    }
}
if(!isLetterDigit){
 console.log(`Password must consist only of letters and digits`);
}else{
    count++
}
for (const char of password) {
    let ascii = char.charCodeAt()
    if(ascii >=48 &&ascii <=57){
            digitCount++
    }
}
if(digitCount<2){
    console.log(`Password must have at least 2 digits`);
}else{
    count++
}
if(count===3){
    console.log(`Password is valid`);
}

}
//solve('logIn')
//solve('MyPass123')
solve('Pa$s$s')