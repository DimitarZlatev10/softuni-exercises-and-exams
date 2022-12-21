function solve(input) {
  input.pop();
  let numberOfCars = Number(input.shift());
  let cars = input.splice(0, numberOfCars);
  let carInfo = {};
  for (let car of cars) {
    car = car.split("|");
    let carName = car[0];
    let carMiles = Number(car[1]);
    let carFuel = Number(car[2]);
    if (!carInfo[carName]) {
      carInfo[carName] = {
        mileage: carMiles,
        fuel: carFuel,
      };
    }
  }
  for (let line of input) {
    line = line.split(" : ");
    let command = line[0];
    let carName = line[1];
    if (command === "Drive") {
      let distance = Number(line[2]);
      let neededFuel = Number(line[3]);
      if (carInfo[carName].fuel < neededFuel) {
        console.log(`Not enough fuel to make that ride`);
      } else {
        carInfo[carName].fuel -= neededFuel;
        carInfo[carName].mileage += distance;
        console.log(
          `${carName} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`
        );
      }
      if (carInfo[carName].mileage >= 100000) {
        console.log(`Time to sell the ${carName}!`);
        delete carInfo[carName];
      }
    } else if (command === "Refuel") {
      let refuel = Number(line[2]);
      if (carInfo[carName].fuel + refuel >= 75) {
        let fuelRecharge = 75 - carInfo[carName].fuel;
        carInfo[carName].fuel += fuelRecharge;
        console.log(`${carName} refueled with ${fuelRecharge} liters`);
      } else {
        carInfo[carName].fuel += refuel;
        console.log(`${carName} refueled with ${refuel} liters`);
      }
    } else if (command === "Revert") {
        let kilometers = Number(line[2])
        if(carInfo[carName].mileage - kilometers <=10000){
            carInfo[carName].mileage = 10000
        }else{
            carInfo[carName].mileage-=kilometers
            console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
        }
    //   let kilometers = Number(line[2]);
    //   carInfo[carName].mileage -= kilometers;
    //    if (carInfo[carName].mileage < 10000) {
    //     carInfo[carName].mileage = 10000;
    //   }else{
    //       console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
    //   }
     
    }
  }
  carInfo = Object.entries(carInfo).sort((a, b) =>
    a === b ? a[0].localeCompare(b[0]) : b[1].mileage - a[1].mileage
  );

  for (let car of carInfo) {
    console.log(
      `${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`
    );
  }
}
// solve([
//   "4",
//   "Lamborghini Veneno|11111|74",
//   "Bugatti Veyron|12345|67",
//   "Koenigsegg CCXR|67890|12",
//   "Aston Martin Valkryie|99900|50",
//   "Drive : Koenigsegg CCXR : 382 : 82",
//   "Drive : Aston Martin Valkryie : 99 : 23",
//   "Drive : Aston Martin Valkryie : 2 : 1",
//   "Refuel : Lamborghini Veneno : 40",
//   "Revert : Bugatti Veyron : 2000",
//   "Stop",
// ]);
solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  )