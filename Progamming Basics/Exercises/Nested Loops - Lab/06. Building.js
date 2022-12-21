function solve(input){
let  floors = Number(input[0])
let rooms = Number(input[1])

for(let f = floors;f>=1;f--){                   
 let print = ''                                 
    for(let r =0 ; r<rooms;r++){                
        if(f == floors){                        
            print+= `L${f}${r} `                   
        }else if (f % 2 == 0 ){
            print+=  `O${f}${r} `
        }else if (f % 2 !== 0){
            print+=`A${f}${r} `
        }

    }
    console.log(print);
}





}
//solve(["6", "4"])
solve(["9", "5"])

// Първо си пишем входа , след това трябва да намерим последния етаж = for(let f = floors;f>=1;f--)
 // след for цикъла трябва да запишен променлива която приема ''. След това проверяваме дали f==floors
 // следователно така намираме последния етаж . С else if (f % 2 == 0 ) намира офисите които са четни.
 // И с else if (f % 2 !== 0) намираме апартаментите които са нечетни.
 // след това имаме намерен последния етаж и имаме намерени офисите , апартаментите и стаите