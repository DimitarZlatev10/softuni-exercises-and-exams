function solve(input) {
    let i =0
    let movie = input[i++]
    
    let standard = 0
    let student = 0
    let kid = 0
    

    while(movie !=='Finish'){
        let freeSeats = Number(input[i++])
        let current = input[i++]
        let total = 0
        while(current !=='End' && current !=='Finish'){
           total++
            if(current=='standard'){
              standard++
            }else if (current =='student'){
                student++
            }else if (current =='kid'){
                kid++
            }
            if(total==freeSeats){
                break
            }
            current = input[i++]
            }
        console.log(`${movie} - ${(100 / freeSeats*total).toFixed(2)}% full.`);
        if(current=='Finish'){
            break
        }
        movie= input[i++]
    }
    total = student + standard + kid
    console.log(`Total tickets: ${total}`);
    console.log(`${(100/total*student).toFixed(2)}% student tickets.`);
    console.log(`${(100/total*standard).toFixed(2)}% standard tickets.`);
    console.log(`${(100/total*kid).toFixed(2)}% kids tickets.`);


}
solve([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
