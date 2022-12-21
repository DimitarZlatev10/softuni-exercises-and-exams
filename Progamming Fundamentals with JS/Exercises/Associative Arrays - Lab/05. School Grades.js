function solve(array){
    let grades = {}
    for (let line of array) {
        let tokens = line.split(' ')
        let name = tokens.shift()
        let schoolGrades = tokens.map(Number)
        if(!grades.hasOwnProperty(name)){
             grades[name] = schoolGrades
        }else{
            schoolGrades.forEach(el =>  grades[name].push(el) )
               
            
        }
    }
    let output = Object.entries(grades).sort((a,b)=> {
        return avg(a[1]) - avg(b[1])
    })
    for (let [key , value] of output) {
        console.log(`${key}: ${value.join(', ')}`);
        
    }
    function avg(param){
        let sum = 0
        for (let i = 0; i < param.length; i++) {
            sum +=param[i]
            
        }
        return sum / param.length
    }
}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)