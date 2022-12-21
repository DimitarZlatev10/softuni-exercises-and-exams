function solve(array){
let ownedGames = array.shift().split(' ')

for (const line of array) {
    
    let [command,n] = line.split(' ')
    if(command==='Play!'){
        break
    }
    let [game,expansion] = n.split('-')
    let index = ownedGames.indexOf(game)
    if(command==='Install'){
        if(!ownedGames.includes(game)){
           ownedGames.push(game)
        }
    }else if (command==='Uninstall'){
        if(ownedGames.includes(game)){

            ownedGames.splice(index,1)
        }
    }else if (command==='Update'){
        if(ownedGames.includes(game)){
            ownedGames.splice(index,1)
            ownedGames.push(game)
        }
    }else if (command==='Expansion'){
        if(ownedGames.includes(game)){
            let m = `${game}:${expansion}`
            ownedGames.splice(index+1,0,m)
        }
    }
}
console.log(ownedGames.join(' '));
}
solve(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
)