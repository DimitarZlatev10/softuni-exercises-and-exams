function solve(input) {
  let username = input[0];
  let password = input[1];
  let i = 2 

  while (password !==input[1]){
      i++
  }
    console.log(`Welcome ${username}!`);
}
solve(["Nakov", "1234", "Pass", "1324", "1234"]);
