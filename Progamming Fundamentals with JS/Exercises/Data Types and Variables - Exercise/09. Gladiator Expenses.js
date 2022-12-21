function solve(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let sum = 0
    let helmetCount = 0
    let swordCount = 0
    let shieldCount = 0
    let armorCount = 0
    for(let i = 1 ; i<=lostFights;i++){
        
        helmetCount++
        swordCount++
        if(helmetCount===2&&swordCount===3){
            shieldCount++
            sum+=shieldPrice
        }if(shieldCount===2){
            armorCount++
            sum+=armorPrice
            shieldCount=0
        }
        if(helmetCount===2){
            sum+=helmetPrice
            helmetCount=0
        }if(swordCount===3){
            sum+=swordPrice
            swordCount=0
        }
            
        }
        console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
    }

solve(7,
    2,
    3,
    4,
    5
    )
    solve(23,
        12.50,
        21.50,
        40,
        200
        )