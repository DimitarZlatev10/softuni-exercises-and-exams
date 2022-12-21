function solve(array) {
    let moves = 0
    let elements = array.shift().toString().split(' ')
    for (const line of array) {
        let [firstIndex , secondIndex] = line.split(' ')
        if(firstIndex==='end'){
            if(elements.length>0){
                console.log(`Sorry you lose :(`);
                console.log(elements.join(' '));
                break
            }
         } if (elements.length===0||elements.length===1){
                console.log(`You have won in ${moves} turns!`);
                break
            }
         
        moves++
        if(firstIndex===secondIndex||firstIndex<0||firstIndex>=elements.length||secondIndex<0||secondIndex>=elements.length){
            let lengthh = Math.trunc(elements.length/2)
            if(lengthh%2!==0){
                lengthh-=1
            }
          elements.splice(lengthh,0,`-${moves}a`, `-${moves}a`)
          console.log(`Invalid input! Adding additional elements to the board`);
        }
        
        if(elements[firstIndex]===elements[secondIndex]&&firstIndex!==secondIndex){
        let matchingNumber = elements[firstIndex]
//         let num1 = elements[firstIndex];

//         let num2 = elements[secondIndex];

// if (num1 === num2) {

// elements.splice(firstIndex, 1);

// secondIndex = elements.indexOf(num2);

// elements.splice(secondIndex, 1);
        if(firstIndex>secondIndex){
        elements.splice(firstIndex,1) 
        elements.splice(secondIndex,1) 
        } else{
            elements.splice(secondIndex,1)
            elements.splice(firstIndex,1) 
        }
        console.log(`Congrats! You have found matching elements - ${matchingNumber}!`);
        }else if (elements[firstIndex]!==elements[secondIndex]&&firstIndex>=0&&secondIndex>=0){
            console.log(`Try again!`);
        }
    }
    
}

solve( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0",
    "end"
])
// console.log(`--------------------`);
// solve([
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
//     )
    // console.log(`-------------------`);
    // solve([
    //     "a 2 4 a 2 4", 
    //     "4 0", 
    //     "0 2",
    //     "0 1",
    //     "0 1", 
    //     "end"
    //     ]
    //     )
    //     console.log(`--------------`);
     