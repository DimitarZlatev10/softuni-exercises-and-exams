function solve(input) {
let p1Eggs = Number(input[0])
let p2Eggs = Number(input[1])
let index = 2
let comand = input[index]

while(comand !=='End of battle'){
    
    if(comand == 'one'){
        p2Eggs -=1
    }if(comand =='two'){
        p1Eggs -=1
    }if(p1Eggs<=0){
        console.log(`Player one is out of eggs. Player two has ${p2Eggs} eggs left.`);
        break
    }if(p2Eggs<=0){
        console.log(`Player two is out of eggs. Player one has ${p1Eggs} eggs left.`);
        break
    }

    index++
    comand = input[index]


}
if(comand =='End of battle'){
console.log(`Player one has ${p1Eggs} eggs left.`);
console.log(`Player two has ${p2Eggs} eggs left.`);
}



}
//solve(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);
solve(["2",
"6",
"one",
"two",
"two"])
