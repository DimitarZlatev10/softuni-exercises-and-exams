class CarDealership {
    constructor(name){
        this.name = name
        this.availableCars = []
        this.soldCars = []
        this.totalIncome = 0
    }
 addCar(model,horsepower,price,mileage){
     if(model===''||horsepower<0||price<0||mileage<0){
         throw new Error("Invalid input!")
     }
     this.availableCars.push({
         model,
         horsepower,
         price,
         mileage
     })
     return `New car added: ${model} - ${horsepower} HP - ${(mileage).toFixed(2)} km - ${(price).toFixed(2)}$`
 }
 sellCar(model,desiredMileage){
    let availableCars = this.availableCars.find(s=> s.model===model)
    if(!availableCars){
        throw new Error(`${model} was not found!`)
    }
   let soldPrice = 0
   let horsepower = availableCars.horsepower
   if(availableCars.mileage<=desiredMileage){
       soldPrice = availableCars.price
   }else if (availableCars.mileage-desiredMileage<=40000){
       soldPrice = availableCars.price * 0.95
   }else if (availableCars.mileage-desiredMileage>40000){
       soldPrice = availableCars.price * 0.90
   }

   this.soldCars.push({
       model,
       horsepower,
       soldPrice
   })
   let index = this.availableCars.indexOf(availableCars)
   this.availableCars.splice(index,1)
   this.totalIncome+=soldPrice
   return `${model} was sold for ${(soldPrice).toFixed(2)}$`
 }
 currentCar(){
     if(this.availableCars.length===0){
         return `There are no available cars`
     }
   let result = []  
   result.push(`-Available cars:`)
   this.availableCars.forEach(s=>result.push(`---${s.model} - ${s.horsepower} HP - ${(s.mileage).toFixed(2)} km - ${(s.price).toFixed(2)}$`))
   return result.join('\n')
 }
 salesReport(criteria){
     let result = []
     result.push(`-${this.name} has a total income of ${(this.totalIncome).toFixed(2)}$`)
     result.push(`-${this.soldCars.length} cars sold:`)
     if(criteria==='horsepower'){
         this.soldCars.sort((a,b)=> b.horsepower-a.horsepower).forEach(s=>result.push(`---${s.model} - ${s.horsepower} HP - ${(s.soldPrice).toFixed(2)}$`))
         return result.join('\n')
     }else if (criteria==='model'){
         this.soldCars.sort((a,b)=>a.model.localeCompare(b.model)).forEach(s=>result.push(`---${s.model} - ${s.horsepower} HP - ${(s.soldPrice).toFixed(2)}$`))
         return result.join('\n')
     }else{
         throw new Error("Invalid criteria!")
     }
 }
}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));



