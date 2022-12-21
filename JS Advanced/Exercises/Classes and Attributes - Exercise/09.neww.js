function solve(input){
let cars = {}
for (let line of input) {
    line = line.split(' | ')
    let brand = line[0]
    let model = line[1]
    let producedCars = Number(line[2])
    if(!cars.hasOwnProperty(brand)){
        cars[brand] = {
            carModel:``,
            producedCars:``
        }
    }
    if(cars[brand].carModel.includes(model)){
        
    }
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)