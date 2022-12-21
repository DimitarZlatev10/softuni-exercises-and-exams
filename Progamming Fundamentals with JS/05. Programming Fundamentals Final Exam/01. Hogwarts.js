function solve(input){
let spell = input.shift()
input.pop()
for (let line of input) {
     line = line.split(' ')
    if(line[0]==='Abjuration'){
        spell = spell.toUpperCase()
        console.log(spell);
    }else if(line[0]==='Necromancy'){
        spell = spell.toLowerCase()
        console.log(spell);
    }else if (line[0]==='Illusion'){
        let index = Number(line[1])
        let word = line[2]
        if(index>=0&&index<spell.length){
            let start = spell.substring(0,index)
            let end = spell.substring(index+1)
            spell = start+word+end
            console.log(`Done!`);
        }else{
            console.log(`The spell was too weak.`);
        }
    }else if(line[0]==='Divination'){
        let firstSubstring = line[1]
        let secondSubstring = line[2]
        if(spell.includes(firstSubstring)){
            while(spell.includes(firstSubstring)){
                spell = spell.replace(firstSubstring,secondSubstring)
            }
            console.log(spell);
        }
    }else if(line[0]==='Alteration'){
        let substring = line[1]
        if(spell.includes(substring)){
            spell = spell.replace(substring,'')
            console.log(spell);
        }
    }else {
        console.log(`The spell did not work!`);
    }
    
}
}
solve((["A7ci0",
"Illusion 1 c",
"Illusion 4 o",
"Abjuration",
"Abracadabra"])
)
solve(["TR1GG3R",
"Necromancy",
"Illusion 8 m",
"Illusion 9 n",
"Abracadabra"])
solve(["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"])


