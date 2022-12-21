function solve(speed, place) {
  let zones = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residental: 20,
  };
  let speeding = "";
  let difference = 0;
  if (speed > zones[place]) {
    difference = speed - zones[place];
    if (difference > 0 && difference <= 20) {
      speeding = "speeding";
    } else if (difference > 20 && difference <= 40) {
      speeding = "excessive speeding";
    } else if (difference > 40) {
      speeding = "reckless driving";
    }
    
  } if(speed<=zones[place]) {
    console.log(`Driving ${speed} km/h in a ${zones[place]} zone`);
  }else{
    difference = speed - zones[place];
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${zones[place]} - ${speeding}`);

  }
}
solve(21, "residental");
