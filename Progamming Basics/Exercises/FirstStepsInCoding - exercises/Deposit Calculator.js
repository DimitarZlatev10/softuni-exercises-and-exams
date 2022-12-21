function solve(input) {

    let depositSum = Number(input[0])
    let monthly = Number(input[1])
    let yearly = Number(input[2])

    let interestSum = (depositSum * yearly / 100)
    let oneMonth = (interestSum / 12)
    let totalSum = (depositSum + monthly * oneMonth)
    console.log(totalSum);

   }


solve(['200','3','5.7'])
solve(['2350','6','7'])