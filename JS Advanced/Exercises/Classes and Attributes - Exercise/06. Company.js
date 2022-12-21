class Company {
    constructor(){
        this.departments = {}
        this.employees =[]
        
    }
    addEmployee(username,salary,position,department){
        if(username===''||salary===''||position===''||department===''||salary<0){
            throw new Error('Invalid input!')
        }
        if(!this.departments.hasOwnProperty(department)){
            this.departments[department] ={
                totalEmployees:0,
                totalSalaries:0,
                averageSalaries:0,
                
            }
        } 
        this.departments[department].totalEmployees+=1
        this.departments[department].totalSalaries+=salary
        this.departments[department].averageSalaries = this.departments[department].totalSalaries / this.departments[department].totalEmployees

        let person = {
            username:username,
            salary:Number(salary),
            position:position,
            department:department
        }
        this.employees.push(person)
        return `New employee is hired. Name: ${username}. Position: ${position}`
    }
    bestDepartment() {
        let result = ''
        let bestDepartment =  Object.entries(this.departments).sort((a,b)=> b[1].averageSalaries-a[1].averageSalaries)
        result += `Best Department is: ${bestDepartment[0][0]}`
        result += `\nAverage salary: ${(bestDepartment[0][1].averageSalaries).toFixed(2)}` 

        let checkDepartment = bestDepartment[0][0]
        let bestPaidEmployees = Object.entries(this.employees).sort((a,b)=> b[1].salary===a[1].salary?a[1].username.localeCompare(b[1].username): b[1].salary-a[1].salary)
        for (let employee of bestPaidEmployees) {
            if(employee[1].department.includes(checkDepartment)){
               result+= `\n${employee[1].username} ${employee[1].salary} ${employee[1].position}`
            }
            
        }
        return result
    }
}





let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
