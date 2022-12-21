class VegetableStore{
    constructor(owner,location){
        this.owner = owner
        this.location = location
        this.availableProducts = []
    }
    loadingVegetables (vegetables){
        let result = []
        result.push(`Successfully added`)
      for (let line of vegetables) {
          line = line.split(' ')
          let vegetable = line[0]
          let quantity = Number(line[1])
          let price = Number(line[2])
          if(!this.availableProducts.hasOwnProperty(vegetable)){
              result.push(vegetable)
             this.availableProducts[vegetable]= {
                 quantity,
                 price
             }
          }else{
              this.availableProducts[vegetable].quantity+=quantity
              if(this.availableProducts[vegetable].price<price){
                  this.availableProducts[vegetable].price = price
              }
          }
      }
      return result.join(', ').replace(',','')
    }
    buyingVegetables (selectedProducts){
        let totalPrice = 0
        for (let line of selectedProducts) {
            line = line.split(' ')
            let vegetable = line[0]
            let quantity = Number(line[1])
            if(!this.availableProducts.hasOwnProperty(vegetable)){
                throw new Error(`${vegetable} is not available in the store, your current bill is $${(totalPrice).toFixed(2)}.`)
            }
           else if(this.availableProducts[vegetable].quantity<quantity){
                throw new Error(`The quantity ${quantity} for the vegetable ${vegetable} is not available in the store, your current bill is $${(totalPrice).toFixed(2)}.`)
            }
            else{
                this.availableProducts[vegetable].quantity -=  quantity
                totalPrice+= quantity*this.availableProducts[vegetable].price
            }
        }
        return `Great choice! You must pay the following amount $${(totalPrice).toFixed(2)}.`
    }
    rottingVegetable (type, quantity){
        if(!this.availableProducts.hasOwnProperty(type)){
            throw new Error(`${type} is not available in the store.`)
        } else if(this.availableProducts[type].quantity<quantity){
            this.availableProducts[type].quantity = 0
            return `The entire quantity of the ${type} has been removed.`
        }else{
            this.availableProducts[type].quantity -= quantity
            return  `Some quantity of the ${type} has been removed.`
        }
    }
    revision(){
        let result = []
        result.push("Available vegetables:")
        let objects = Object.entries(this.availableProducts)
        objects.sort((a,b)=>a[1].price-b[1].price).forEach(s=>result.push(`${s[0]}-${s[1].quantity}-$${s[1].price}`))
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return result.join('\n')
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

