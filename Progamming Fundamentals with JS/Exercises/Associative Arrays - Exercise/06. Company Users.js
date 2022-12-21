function solve(array){
let listedCompanies = {}
for (let line of array) {
    let [company,id] = line.split(' -> ')
    if(!listedCompanies.hasOwnProperty(company)){
        listedCompanies[company] = []
    }if(!listedCompanies[company].includes(id)){
        listedCompanies[company].push(id)
    }  
}
let sortedCompanies = Object.keys(listedCompanies)
    sortedCompanies.sort((a,b)=> a.localeCompare(b))
    for (let line of sortedCompanies) {
        console.log(line);
        for (let id of listedCompanies[line]) {
            console.log(`-- ${id}`);
            
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )