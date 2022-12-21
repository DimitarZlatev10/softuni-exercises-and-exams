function solve(input){
let openedTabs = Number(input.shift())
let salary = Number(input.shift())



for(index = 0 ; index < openedTabs ; index ++){
    let site = input.shift()
    if (site == 'Facebook'){
        salary -= 150
    }else if (site =='Instagram'){
        salary -=100
    }else if (site =='Reddit'){
        salary -=50
    }else{
        salary -=0
    }
}
if(salary>0 ){
    console.log(salary.toFixed(0));
}else {
    console.log(`You have lost your salary.`);
}






}
solve(['10','750','Facebook','Dev.bg','Instagram','Facebook','Reddit','Facebook','Facebook'])
solve(['3','500','Github.com','Stackoverflow.com','softuni.bg'])
solve(['3','500','Facebook','Stackoverflow.com','softuni.bg'])
