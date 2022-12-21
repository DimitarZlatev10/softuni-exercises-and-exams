function solve(input) {
    let name = input[0]
    let movieTime = Number(input[1])
    let breakTime = Number(input[2])

    let lunchTime = breakTime * 1/8
    let breathTime = breakTime * 1/4
    let leftTime = breakTime - lunchTime -breathTime
    if(leftTime >=movieTime){
        leftTime -=movieTime
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(leftTime)} minutes free time.`);
    }else if(movieTime>leftTime) {
       leftTime = Math.abs(leftTime-movieTime)
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(leftTime)} more minutes.`);
    }
    
}
solve(["Game of Thrones", "60", "96"]);
solve(["Teen Wolf", "48", "60"]);
