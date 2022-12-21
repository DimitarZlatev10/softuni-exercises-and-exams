function solve(input){
let day = input[0]

if(day =='Monday'|| day=='Tuesday'  || day=='Friday'){
    console.log('12');
}
else if (day== 'Wednesday'||day=='Thursday'){
    console.log('14');
}
else{
    console.log('16');
}


}
solve(['Monday'])
solve(['Tuesday'])
solve(['Wednesday'])
solve(['Thursday'])
solve(['Friday'])
solve(['Saturday'])
solve(['Sunday'])
