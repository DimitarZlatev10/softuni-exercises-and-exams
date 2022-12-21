function solve(array){
let obj = JSON.parse(array)
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')