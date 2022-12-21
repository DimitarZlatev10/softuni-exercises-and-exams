function solve(input) {
  let sorted = input.sort((a, b) =>
    a.length === b.length ? a.localeCompare(b) : a.length - b.length
  );
  console.log(sorted.join("\n"));
}
solve(["alpha", "beta", "gamma"]);
