function solve(input) {
    let games = input[0].split(' ')
   
    for (let i = 1; i < input.length; i++) {
        let currentEl = input[i].split(' ')
        let comand = currentEl[0]
        let newGame = currentEl[1]
        if(comand==='Play!'){
            break
        }else if (comand==='Install'&&games.includes(newGame)=== false){
            games.push(newGame)
        }else if (comand==='Uninstall'&&games.includes(newGame)){
         let index =games.indexOf(newGame)
         games.splice(index,1)
        }else if (comand==='Update'&&games.includes(newGame)){
         let index =  games.indexOf(newGame)
         games.splice(index,1)
         games.push(newGame)
        }else if (comand==='Expansion'){
            let expansion = newGame.split('-');
            let game = expansion[0]
            if(games.includes(game)){
                let expandedGame = expansion.join(':')
                let index = games.indexOf(game)
                games.splice(index+1,0,expandedGame)
            }
        }
        
    }
    console.log(games.join(' '));
}
solve([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
