function solve(input){

let budget = Number(input[0])
let season = input[1]

switch (season){
    case 'summer':
        if(budget<=100){
            budget = budget * 0.30;
            break;
        }
        else if (budget>100 && budget<=1000){
            budget = budget * 0.40
            break;
        }
        else if (budget>1000){
            budget = budget * 0.90
            break;
        }
        case 'winter':
            if(budget<=100){
                budget = budget * 0.70
                break;
            }
            else if (budget>100&& budget<=1000){
                budget = budget * 0.80
                break;
            }
            else if (budget>1000){
                budget = budget *  0.90
                break;
            }
}
if(budget<=100){
    if(season=='summer'){
        console.log(`Somewhere in Bulgaria`);
        console.log(`Camp - ${budget.toFixed(2)}`);
    }
    else if (season=='winter'){
        console.log(`Somewhere in Bulgaria`);
        console.log(`Hotel - ${budget.toFixed(2)}`);
    }
    

    }   
    else if (budget>=100&&budget<=1000){
        if(season=='summer'){
            console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${budget.toFixed(2)}`);
        }
        else if (season=='winter'){
            console.log(`Somewhere in Balkans`);
            console.log(`Hotel - ${budget.toFixed(2)}`);
        }
    }
    if (budget>1000){
        if(season=='summer'){
            console.log(`Somewhere in Europe`);
            console.log(`Hotel - ${budget.toFixed(2)}`);

        }
        else if (season=='winter'){
            console.log(`Somewhere in Europe`);
            console.log(`Hotel - ${budget.toFixed(2)}`);
            
        }
       
    }





}
solve(['50','summer'])
solve(['75','winter'])
solve(['312','summer'])
solve(['678.53','winter'])
solve(['1500','summer'])
