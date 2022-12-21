function solve(input){
    let tournaments =Number(input[0])
    let startPoints = Number(input[1])
     let wins = 0
     let comand = 2
     let tournamentName = input[comand]
     let averagePoints = 0
    for(i=1 ;i<=tournaments ; i++){
    if(tournamentName=='W'){
        startPoints +=2000
        averagePoints +=2000
        wins++
    }else if (tournamentName=='F'){
        startPoints +=1200
        averagePoints +=1200
    }else if (tournamentName=='SF'){
        startPoints+=720
        averagePoints+=720
    }
comand ++
tournamentName = input[comand]

    }
    
    averagePoints = averagePoints / tournaments
    console.log(`Final points: ${startPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${((wins/tournaments)*100).toFixed(2)}%`);
}
solve (["5", "1400", "F", "SF", "W", "W", "SF"])