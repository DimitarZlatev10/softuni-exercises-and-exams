function solve(input) {

    let numberOfPages = Number(input[0]) // moje i s Number(input[0]) , moje i samo s input[0]
    let pagesAnHour = Number(input[1])
    let numberOfDays = Number(input[2])

    let timeForReading = (numberOfPages / pagesAnHour) // moje i s () moje i bez
    let result = (timeForReading / numberOfDays)
    console.log(result);


}

solve(['212','20','2'])
solve(['432','15','4'])
