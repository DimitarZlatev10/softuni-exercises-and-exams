function solve(input){
const premierePrice = 12.0
const normalPrice = 7.50
const discountPrice = 5.0

const typeOfProjection = input[0]
let rows  = Number(input[1])
let cols = Number(input[2])
let finalPrice = 0

switch(typeOfProjection){
    case 'Premiere':
        finalPrice=rows*cols*premierePrice
        break;
        case 'Normal':
            finalPrice=rows*cols*normalPrice
            break;
            case 'Discount':
                finalPrice=rows*cols*discountPrice
                break;
}
console.log(`${finalPrice.toFixed(2)} leva`);

}
solve(['Premiere','10','12'])
solve(['Normal','21','13'])
solve(['Discount','12','30'])