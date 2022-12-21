function solve(array,n){
 
 for (const line of n) {
     let [comand,index, ...element] = line.split(' ')
            element = element.map(Number)
            index = Number(index)
     if(comand==='add'){
        array.splice(index,0,element[0])
        
     }else if (comand==='addMany'){
             array.splice(index,0, ...element) 
     }else if (comand==='contains'){
         if(array.includes(index)){
             console.log(array.indexOf(index));
            }else{
                console.log(-1);
            }
        }else if (comand==='remove'){
            array.splice(index,1)
        }else if (comand==='shift'){
            for (let i = 0; i < index; i++) {
                let first = array.shift()
                array.push(first)
            }
        }else if (comand==='sumPairs'){
            for (let k = 0; k < array.length; k++) {
                let secondEl = array[k+1] ? array[k+1] : 0;
                array[k] +=secondEl
                array.splice(k+1,1)
                
            }
        }else if (comand==='print'){
            console.log(`[ ${array.join(', ')} ]`);

        }

         
 }


    

}
solve([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ['sumPairs','sumPairs','addMany 0 -1 -2 -3','print']
    )
// solve([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
//     ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
// )