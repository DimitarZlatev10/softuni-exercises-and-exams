function radiantsToDegrees(input) {
  let radiants = Number(input[0]);
  let degrees = (radiants * 180) / Math.PI;
  console.log(degrees); // console.log(degrees.tofixed(0)) - da zakrugli chislata
}

radiantsToDegrees(["3.1416"]);
radiantsToDegrees(["6.2832"]);
radiantsToDegrees(["0.7854"]);
radiantsToDegrees(["0.5236"]);
