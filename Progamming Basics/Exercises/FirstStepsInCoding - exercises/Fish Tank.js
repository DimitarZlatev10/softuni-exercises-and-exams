function solve(input) {
  const length = Number(input[0]);
  const width = Number(input[1]);
  const height = Number(input[2]);
  const percent = Number(input[3]);

  const size = length * width * height;
  const totalLiters = size * 0.001;
  const percentt = percent * 0.01;
  const neededLiters = totalLiters * (1 - percentt);
  console.log(neededLiters);
}
solve(["85", "75", "47", "17"]);
solve(["105", "77", "89", "18.5"]);
