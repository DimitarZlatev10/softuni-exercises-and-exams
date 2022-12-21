function solve(input) {
  let regEx = /(\=|\/)([A-Z][A-Za-z]{2,})\1/g;
  let destinations = [];
  let isValid;
  while ((isValid = regEx.exec(input))) {
    destinations.push(isValid[2]);
  }
  let sum = 0;
  for (let line of destinations) {
    sum += line.length;
  }
  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${sum}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
