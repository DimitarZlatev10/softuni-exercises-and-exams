function solve(input) {
  let number = input[0]
  let stotici = Number(number.charAt(2))
  let desetici = Number(number.charAt(1))
  let edenici = Number(number.charAt(0))


  for (let i = 1; i <= stotici; i++) {
    for (let j = 1; j <= desetici; j++) {
      for (let k = 1; k <= edenici; k++) {
        let result = i * j * k;
        console.log(`${i} * ${j} * ${k} = ${result};`);
      }
    }
  }
}
solve(["324"]);




