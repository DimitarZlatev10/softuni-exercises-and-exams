function solve(array){
    let holder = []
class Town {
    constructor(town,latitude,longitude){
        this.town = town
        this.latitude = latitude
        this.longitude = longitude
    }
}
for (let line of array) {
    let [town , latitude,longitude]  = line.split(' | ')
    latitude = Number(latitude).toFixed(2)
    longitude = Number(longitude).toFixed(2)
    let info = new Town (town,latitude,longitude)
    holder.push(`{ town: '${info.town}', latitude: '${info.latitude}', longitude: '${info.longitude}' }`)
   
}
console.log(holder.join(' \n'));
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)