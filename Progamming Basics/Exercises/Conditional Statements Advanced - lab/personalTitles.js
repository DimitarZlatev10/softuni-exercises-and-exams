function solve(input) {
  let age = Number(input.shift());//moje i s Number(input[0])
  let gender = input.shift(); // moje i s input[1]

  if (gender == "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  } else {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  }
}
solve(["12", "f"]);
solve(["17", "m"]);
solve(["25", "f"]);
solve(["13.5", "m"]);
