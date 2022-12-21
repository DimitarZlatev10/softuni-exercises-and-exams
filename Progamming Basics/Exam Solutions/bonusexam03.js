function solve(input) {
let sizeOfEggs = input[0]
let colorOfEggs = input[1]
let numberOfPartidos = Number(input[2])
let priceForEgg = 0

if(sizeOfEggs == 'Large'){
    if(colorOfEggs == 'Red'){
         priceForEgg += 16 * numberOfPartidos
    }
    else if (colorOfEggs== 'Green'){
        priceForEgg += 12 * numberOfPartidos
    }
    else if(colorOfEggs == 'Yellow'){
        priceForEgg +=9 * numberOfPartidos
    }
}
if(sizeOfEggs == 'Medium'){
    if(colorOfEggs =='Red'){
        priceForEgg +=13 * numberOfPartidos
    }
    else if (colorOfEggs =='Green'){
        priceForEgg +=9 * numberOfPartidos
    }
    else if (colorOfEggs == 'Yellow'){
        priceForEgg +=7 * numberOfPartidos
    }
}
if(sizeOfEggs=='Small'){
    if(colorOfEggs=='Red'){
        priceForEgg +=9 * numberOfPartidos
    }
    else if (colorOfEggs=='Green'){
        priceForEgg +=8 * numberOfPartidos
    }
    else if (colorOfEggs=='Yellow'){
        priceForEgg +=5 * numberOfPartidos
    }
}

let expenses = priceForEgg * 0.35
let sumAfterExpenses = Math.abs(priceForEgg - expenses)
console.log(`${sumAfterExpenses.toFixed(2)} leva.`);

}
solve(["Large", "Red", "7"]);
