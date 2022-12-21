function solve(input) {
  const shape = input[0];
  const lenght = Number(input[1]);
  const height = Number(input[2]);
  if (shape === "square") {
    console.log(Number(lenght * lenght).toFixed(3));
  } else if (shape === "rectangle") {
    console.log(Number(lenght * height).toFixed(3));
  } else if (shape === "circle") {
    console.log(Number(Math.PI * lenght * lenght).toFixed(3));
  } else if (shape === "triangle") {
    console.log(Number((lenght * height) / 2).toFixed(3));
  }
}
solve(["square", "5"]);
solve(["rectangle", "7", "2.5"]);
solve(["circle", "6"]);
solve(["triangle", "4.5", "20"]);
