function solve(array){
let neighbourhood = array.shift().split('@').map(Number)
let jump = 0
for (const line of array) {
    let [command , jumpLength] = line.split(' ')
    jumpLength = Number(jumpLength)
    if(command ==='Love!'){
        console.log(`Cupid's last position was ${jump}.`);
        let failed = neighbourhood.filter(a=>a>0)
        let count = failed.length
        console.log(`Cupid has failed ${count} places.`);
        
        break
    }if(command==='Jump'){
        jump+=jumpLength
        if(jump>=neighbourhood.length){
            jump = 0
        }
        if(neighbourhood[jump]===0){
            console.log(`Place ${jump} already had Valentine's day.`);
        }else{
            neighbourhood[jump]-=2
            if(neighbourhood[jump]===0){
                console.log(`Place ${jump} has Valentine's day.`);
            }
        }
        // if(jump>=neighbourhood.length){
        //     jump = 0
        // }if(neighbourhood[jump]-2===0){
        //     console.log(`Place ${jump} has Valentine's day.`);
        //     neighbourhood[jump]-=2
        // } else if (neighbourhood[jump]===0){
        //     console.log(`Place ${jump} already had Valentine's day.`);
        // }else{
        //     neighbourhood[jump]-=2
        // }
    }
    let check = neighbourhood.filter(n=>n>0)
    if(check.length===0){
        console.log(`Cupid's last position was ${jump}.`);
        console.log(`Mission was successful.`);
        break
    }

    
}
}
solve(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love! "])
// solve(["2@4@2",
// "Jump 1",
// "Jump 1",
// "Jump 1",
// "Jump 1",
// "Jump 1",
// "Love! "])
