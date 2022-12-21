function concentrateData(input) {
  const name = input[0];
  let hours = 3 * input[1];
  const projects = input[1];
  console.log(
    `The architect ${name} will need ${hours} hours to complete ${projects} project/s.`
  );
}

concentrateData(["George", "4"]);
concentrateData(["Sanya", "9"]);
