function solve(input){

let month = input[0]
let numberOfNights = Number(input[1])
let studio = 0
let apartment = 0

if(month=='May'||month=='October'){
 studio =50 * numberOfNights
 apartment = 65 *  numberOfNights
 if(numberOfNights>7 && numberOfNights<14&&month=='May'||month=='October'){
     studio = studio- studio *0.05
     apartment = apartment
     console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
     console.log(`Studio: ${studio.toFixed(2)} lv.`);
 }
 
 
     else if(month=='May'||month=='October'||month=='June'||month=='July'||month=='August'||month=='September'&&numberOfNights>14){
        apartment = apartment - apartment *0.10
        console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
         if (numberOfNights>14&&month=='May'||month=='October'){
            studio = studio - studio * 0.30
            console.log(`Studio: ${studio.toFixed(2)} lv.`);
 }
}
 }
 if(month=='June'||month=='September'){
    studio =75.20 * numberOfNights
    apartment = 68.70 *  numberOfNights
    if(numberOfNights>7 && numberOfNights<14&&month=='June'||month=='September'){
        studio = studio
        apartment = apartment
        console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
        console.log(`Studio: ${studio.toFixed(2)} lv.`);
    }
    
    
        else if(month=='May'||month=='October'||month=='June'||month=='July'||month=='August'||month=='September'&&numberOfNights>=14){
           apartment = apartment 
           console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
            if (numberOfNights>=14&&month=='June'||month=='September'){
               studio = studio 
               console.log(`Studio: ${studio.toFixed(2)} lv.`);
    }
   }
    }
    if(month=='July'||month=='August'){
        studio =76 * numberOfNights
        apartment = 77 *  numberOfNights
        if(numberOfNights>7 && numberOfNights<14&&month=='July'||month=='August'){
           apartment = apartment
           studio = studio
           if(month=='May'||month=='October'||month=='June'||month=='July'||month=='August'||month=='September'&&numberOfNights>14){
            apartment = apartment - apartment *0.10
            studio = studio
            console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);
        }
    }
        
            
       
        }

        



    

}
solve(['May','15'])
solve(['June','14'])
solve(['August','20'])
