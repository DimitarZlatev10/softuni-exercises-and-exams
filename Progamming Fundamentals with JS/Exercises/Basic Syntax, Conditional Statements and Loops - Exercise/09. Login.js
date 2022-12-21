function solve(input) {
  let username = input.shift();
  let pass = username.split("").reverse().join("");
  let count = 0;
 

  for (let i = 0; i <= input.length; i++) {
      
    if (i === 3) {
      console.log(`User ${username} blocked!`);
      break;
    }
    if (input[i] == pass) {
      console.log(`User ${username} logged in.`);
      break
    } else {
      console.log(`Incorrect password. Try again.`);
      count++;
      
    }
   
  }
}
solve(['sunny','rainy','cloudy','sunny','not sunny']);
solve(['Acer','login','go','let me in','recA'])
