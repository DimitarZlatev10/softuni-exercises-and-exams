class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, "fullName", {
      get: function () {
        return `${this.firstName} ${this.lastName}`;
      },
      set: function (value) {
        value = value.split(" ");
        let firstName = value[0];
        let lastName = value[1];
        if (firstName.length > 0 && lastName.length > 0) {
          this.firstName = firstName;
          this.lastName = lastName;
        }
      },
    });
  }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
