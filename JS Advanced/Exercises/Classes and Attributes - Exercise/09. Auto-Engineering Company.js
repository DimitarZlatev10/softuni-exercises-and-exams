function solve(input) {
  let cars = {};

  for (let line of input) {
    line = line.split(" | ");
    let carBrand = line[0];
    let carModel = line[1];
    let producedCars = Number(line[2]);

    if (!cars.hasOwnProperty(carBrand)) {
      cars[carBrand] = {
        carModel: [],
      };
    }
  
      let pushCar = {
      carModel: carModel,
      producedCars: producedCars,
    };  
    if(cars[carBrand].carModel.hasOwnProperty(carModel)){
      break
    }
    cars[carBrand].carModel.push(pushCar);
    
  }
  let entries = Object.entries(cars)
  
  for (let entry of entries) {
      console.log(entry[0]);
      let carInfo = entry[1].carModel
      for (let car of carInfo) {
        console.log(`###${car.carModel} -> ${car.producedCars}`);
          
      }
  }
}
// solve([
//   "Audi | Q7 | 1000",
//   "Audi | Q6 | 100",
//   "BMW | X5 | 1000",
//   "BMW | X6 | 100",
//   "Citroen | C4 | 123",
//   "Volga | GAZ-24 | 1000000",
//   "Lada | Niva | 1000000",
//   "Lada | Jigula | 1000000",
//   "Citroen | C4 | 22",
//   "Citroen | C5 | 10",
// ]);
solve(["Audi | Q7 | 1000",
"Audi | Q7 | 100",
"BMW | X6 | 1000",
"BMW | X6 | 100",])

