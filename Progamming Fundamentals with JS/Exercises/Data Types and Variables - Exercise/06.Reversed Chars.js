function solve(one,two,three){
//     console.log(`${three} ${two} ${one}`);
 let sum = one + two + three
 let reverse = sum.split('').reverse().join(' ')
 console.log(reverse);
 }

solve('A',
'B',
'C'
)