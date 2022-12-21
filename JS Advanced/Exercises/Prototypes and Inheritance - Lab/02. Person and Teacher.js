function personAndTeacher(){

class Person{
    constructor(name,email){
        this.name = name,
        this.email = email
        return Person
    }
}

class Teacher extends Person {
    constructor(name,email,subject){
        super(name,email)
        this.subject = subject
    }
}

let info = new Person('Pesho','Pesho@abv.bg')
let info2 = new Teacher('Kica','Kica@abv.bg','English')
}
 personAndTeacher()



