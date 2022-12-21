function solve(array){
let countries = {}
 for (let row of array) {
     let firstRow = row.split(' > ')
     let country = firstRow[0]
     let city = firstRow[1]
     let price = Number(firstRow[2])
      if(!countries.hasOwnProperty(country)){
          countries[country] = {}
      }
      if(!countries[country].hasOwnProperty(city)){
          countries[country][city] = price
      }
      if(countries[country][city] > price){
        countries[country][city] = price
      }
      
 }
 let keys = Object.keys(countries)
 let sorted = keys.sort((a,b)=>a.localeCompare(b))
 for (let item of sorted) {
     let sortedCities = Object.entries(countries[item])
     sortedCities.sort((a,b)=>a[1]-b[1])
    
     let result = []
     for (let city of sortedCities) {
         result.push(city.join(' -> '))
         
     }
     console.log(`${item} -> ${result.join(' ')}`);
 }
 
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )