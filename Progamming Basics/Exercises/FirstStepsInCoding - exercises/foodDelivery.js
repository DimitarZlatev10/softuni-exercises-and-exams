function solve(input){
const chickenMeat = 10.35
const fishMenu = 12.40
const vegetarianMenu = 8.15

const numberOfChickenMenus = Number(input[0])
const numberOfFishMenus = Number(input[1])
const numberOfVegetarianMenus = Number(input[2])

const priceForChickenMenus = numberOfChickenMenus * chickenMeat
const priceForFishMenus = numberOfFishMenus * fishMenu
const priceForVegetarianMenus = numberOfVegetarianMenus *vegetarianMenu
const totalPriceForMenus = priceForChickenMenus+priceForFishMenus+priceForVegetarianMenus
const priceForDesert = totalPriceForMenus * 0.2
const priceForDelivery = 2.50
const totalPriceFromOrder =  Number(totalPriceForMenus + priceForDesert + priceForDelivery).toFixed(2)
console.log(`Total: ${totalPriceFromOrder}`);



}
solve(['2','4','3'])
solve(['10','0','6'])
solve(['1','1','1'])
