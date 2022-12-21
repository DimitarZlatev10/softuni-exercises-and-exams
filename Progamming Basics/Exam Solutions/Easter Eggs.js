function solve(input) {
let dyedEggs = Number(input[0])
let maxEggs = Number.MIN_SAFE_INTEGER
let color;
let red = 0
let orange = 0
let blue = 0
let green =  0
let index = 1
let comand = input[index]

for(i=1 ; i<=dyedEggs;i++){
    if(comand=='red'){
      red++  
    }
    if(comand=='orange'){
        orange++
    }if(comand=='blue'){
        blue++
    }if(comand=='green'){
        green++
    }
    index++
    comand = input[index]
}
if(red>maxEggs){
    maxEggs = red
    color =  'red'
}
    if(orange>maxEggs){
        maxEggs = orange
        color = 'orange'
    }
        if(blue>maxEggs){
            maxEggs = blue
            color = 'blue'
        }
            if(green>maxEggs){
                maxEggs = green
                color = 'green'
            }
            
        


console.log(`Red eggs: ${red}`);
console.log(`Orange eggs: ${orange}`);
console.log(`Blue eggs: ${blue}`);
console.log(`Green eggs: ${green}`);
console.log(`Max eggs: ${maxEggs} -> ${color}`);





}
//solve(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
solve(["4", "blue", "red", "blue", "orange"]);
