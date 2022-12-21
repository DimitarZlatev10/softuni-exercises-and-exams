function solve(input){
const packetOfPencils = 5.80
const packetOfMarkers = 7.20
const preparation = 1.20


const numberOfPencilPackets = Number(input[0])
const numberOfMarkerPackets = Number(input[1])
const litersOfPreparationForCleaningTheDesk = Number(input[2])
const discount = Number(input[3])

const priceOfPencils = numberOfPencilPackets * packetOfPencils 
const priceOfMarkers = numberOfMarkerPackets * packetOfMarkers
const priceOfLitersFromPreparation = litersOfPreparationForCleaningTheDesk * preparation
const priceOfAllChemicals = priceOfPencils + priceOfMarkers + priceOfLitersFromPreparation
const priceWithDiscount = priceOfAllChemicals - ((priceOfAllChemicals * discount)/100)
console.log(Number(priceWithDiscount).toFixed(3));


}
solve(['2','3','2.5','25'])
solve(['4','2','5','13'])
solve(['7','8','0.5','45'])
