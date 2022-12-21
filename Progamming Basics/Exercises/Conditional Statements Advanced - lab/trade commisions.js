function solve(input){
let city = input[0]
let sales = Number(input[1])


if (city==='Sofia'){
    if(sales>=0&&sales<=500)
    sales = sales *0.05
    else if (sales>=500&&sales<=1000)
    sales =  sales *0.07
    else if (sales>=1000&&sales<=10000)
    sales = sales *0.08
    else if (sales>10000)
    sales = sales* 0.12
}
if (city==='Varna'){
    if(sales>=0&&sales<=500)
    sales = sales *0.045
    else if (sales>=500&&sales<=1000)
    sales =  sales *0.075
    else if (sales>=1000&&sales<=10000)
    sales = sales *0.10
    else if (sales>10000)
    sales = sales* 0.13
} 
if (city==='Plovdiv'){
    if(sales>=0&&sales<=500)
    sales = sales *0.055
    else if (sales>=500&&sales<=1000)
    sales =  sales *0.08
    else if (sales>=1000&&sales<=10000)
    sales = sales *0.12
    else if (sales>10000)
    sales = sales* 0.145
} 
if (city=='Sofia'||city=='Varna'||city=='Plovdiv'&&sales>0){
    console.log(sales.toFixed(2));
}
else {
    console.log(`error`);
}


}
solve(['Sofia','1500'])
solve(['Plovdiv','499.99'])
solve(['Varna','3874.50'])
solve(['Kaspichan','-50'])
