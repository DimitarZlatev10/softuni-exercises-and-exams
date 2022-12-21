function solve(n){
    n=Number(n)
    let start = 97
    let end = start+n
    for (let firstAscii = start; firstAscii < end; firstAscii++) {
        for (let secondAscii = start; secondAscii < end; secondAscii++) {
            for (let thirdAscii = start; thirdAscii < end; thirdAscii++) {
                let firstLetter = String.fromCharCode(firstAscii)
                let secondLetter = String.fromCharCode(secondAscii)
                let thirdLetter = String.fromCharCode(thirdAscii)
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
               
                
            }
            
            
        }
        
        
    }
}
solve(3)