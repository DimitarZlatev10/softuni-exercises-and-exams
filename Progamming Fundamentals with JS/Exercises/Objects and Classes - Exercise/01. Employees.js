function solve(array){
    class Person{
        constructor(name,personalNumber){
            this.name = name
            this.personalNumber=personalNumber
        }
    }
for (let person of array) {
    let name = person
    let personalNumber = name.length
    let info = new Person(name,personalNumber)
    console.log(`Name: ${info.name} -- Personal Number: ${info.personalNumber}`);
}
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )