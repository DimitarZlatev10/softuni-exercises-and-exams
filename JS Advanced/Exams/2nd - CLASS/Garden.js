class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }
  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    } else {
      this.plants.push({
        plantName: plantName,
        spaceRequired: spaceRequired,
        ripe: false,
        quantity: 0,
      });
      this.spaceAvailable -= spaceRequired;
      return `The ${plantName} has been successfully planted in the garden.`;
    }
  }

  ripenPlant(plantName, quantity) {
    let plantInfo = this.plants.find((s) => s.plantName === plantName);
    if (!plantInfo) {
      throw new Error(`There is no ${plantName} in the garden.`);
    } else if (plantInfo.ripe === true) {
      throw new Error(`The ${plantName} is already ripe.`);
    } else if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    } else {
      plantInfo.ripe = true;
      plantInfo.quantity += quantity;
      if (quantity === 1) {
        return `${quantity} ${plantName} has successfully ripened.`;
      } else if (quantity > 1) {
        return `${quantity} ${plantName}s have successfully ripened.`;
      }
    }
  }
  harvestPlant(plantName) {
    let plantInfo = this.plants.find((p) => p.plantName === plantName);
    if (!plantInfo) {
      throw new Error(`There is no ${plantName} in the garden.`);
    } else if (plantInfo.ripe === false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    } else {
      this.storage.push({
        plantName: plantInfo.plantName,
        quantity: plantInfo.quantity,
      });
      this.spaceAvailable += plantInfo.spaceRequired;
      let index = this.plants.indexOf(plantInfo);
      this.plants.splice(index, 1);
      return `The ${plantName} has been successfully harvested.`;
    }
  }
  generateReport() {
    // console.log(`The garden has ${this.spaceAvailable} free space left.`);
    // let sortedPlants = [];

    // this.plants
    //   .sort((a, b) => a.plantName.localeCompare(b.plantName))
    //   .forEach((s) => sortedPlants.push(`${s.plantName}`));
    // let a = `Plants in the garden: `;
    // a += sortedPlants.join(", ");

    // console.log(a);
    // if (this.storage.length > 0) {
    //   let a = [];
    //   this.storage.forEach((s) => a.push(`${s.plantName} (${s.quantity})`));
    //   let result = `Plants in storage: `;
    //   result += a.join(", ");
    //   return result;
    // } else {
    //   return `Plants in storage: The storage is empty.`;
    // }
    let result = [];
    result.push(`The garden has ${this.spaceAvailable} free space left.`);
    let sortedPlants = [];
    this.plants
      .sort((a, b) => a.plantName.localeCompare(b.plantName))
      .forEach((s) => sortedPlants.push(`${s.plantName}`));
    let sortedPlantsHeading = `Plants in the garden: `;
    sortedPlantsHeading += sortedPlants.join(", ");
    result.push(sortedPlantsHeading);
    if (this.storage.length > 0) {
      let storage = [];
      this.storage.forEach((s) =>
        storage.push(`${s.plantName} (${s.quantity})`)
      );
      let storageHeading = `Plants in storage: `;
      storageHeading += storage.join(", ");
      result.push(storageHeading);
      return result.join("\n");
    } else {
      return `Plants in storage: The storage is empty.`;
    }
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
