function solve(array){
let properties = Object.entries(array)
for (const [key , value] of properties) {
    console.log(`${key} -> ${value}`);
    
}
}
solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)