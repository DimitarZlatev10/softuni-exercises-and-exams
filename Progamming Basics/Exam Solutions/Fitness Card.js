function solve(input) {
  let sum = Number(input[0]);
  let gender = input[1];
  let age = Number(input[2]);
  let sport = input[3];
  let price = 0;

  if (gender == "m") {
    if (sport == "Gym") {
      price += 42;
    } else if (sport == "Boxing") {
      price += 41;
    } else if (sport == "Yoga") {
      price += 45;
    } else if (sport == "Zumba") {
      price += 34;
    } else if (sport == "Dances") {
      price += 51;
    } else if (sport == "Pilates") {
      price += 39;
    }
  }
  if (gender == "f") {
    if (sport == "Gym") {
      price += 35;
    } else if (sport == "Boxing") {
      price += 37;
    } else if (sport == "Yoga") {
      price += 42;
    } else if (sport == "Zumba") {
      price += 31;
    } else if (sport == "Dances") {
      price += 53;
    } else if (sport == "Pilates") {
      price += 37;
    }
  }
  if (age <= 19) {
    price = price - price * 0.2;
  }

  if (price <= sum) {
    console.log(`You purchased a 1 month pass for ${sport}.`);
  } else {
    console.log(
      `You don't have enough money! You need $${(price - sum).toFixed(2)} more.`
    );
  }
}
solve(["50", "m", "23", "Gym"]);
solve(["20", "f", "15", "Yoga"]);
