function solve(input) {
    let voucher = Number(input[0]);
    let voucerSymbols = 8;
    let countOfBoughtTickets = 0;
    let countOfBoughtOther = 0;
    let index = 1;
    let purchase = input[index];
    let sum = 0;
  
    while(purchase !='End' ){
        purchase = input[index].length
        if(purchase>voucerSymbols){
            purchase = input[index]
            sum = (purchase.charCodeAt(0))+(purchase.charCodeAt(1))
            if(sum>voucher){
                break
            }
             voucher -=sum
             countOfBoughtTickets++
             purchase = input[index].length
        }if (purchase<=voucerSymbols){
            purchase = input[index]
            sum = (purchase.charCodeAt(0))
            if(sum>voucher){
                break
            }
            voucher -=sum
            countOfBoughtOther++
            
            }
             index++
        purchase = input[index]
        }
    console.log(countOfBoughtTickets);
    console.log(countOfBoughtOther);
    }
            
            
            
            

             

         
  

  //solve(["300", "Captain Marvel", "popcorn", "Pepsi"]);
  solve(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);