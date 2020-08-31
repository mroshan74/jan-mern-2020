function Person(name, city, age){
    this.name = name,
    this.city = city,
    this.age =  age,
    this.details = function(){
        return `${this.name}(${this.age}) lives in ${this.city}`
    }
}
const p1 = new Person('sneha','kozhikode',24)
console.log(p1.details())

const p2 = new Person("ajmal", "malappuram", 24);
console.log(p2.details())

const p3 = new Person("ambu", "kollam", 24);
console.log(p3.details())

const p4 = new Person("azim", "kannur", 24);
console.log(p4.details())