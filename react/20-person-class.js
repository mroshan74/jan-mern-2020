// Person
// property - firstName, lastName
//method - fullName

class Person {
  // assigning initial values to property
  constructor(fName, lName,c){
       this.firstName = fName;
       this.lastName = lName;
       this.country = c;
  }

  fullName(){
      return `${this.firstName} ${
        this.lastName
      } - (${this.country.toUpperCase()})`;
  }
}

const p1 = new Person("muhammed", "roshan", "india");
console.log(p1.fullName());