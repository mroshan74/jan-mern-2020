console.log(this) // { }

const es5function = function(){
    console.log(this) // global object
}

// console.log(es5function())
// inside arrow function, the value of this, will always be the value this in the outer scope
const es6function = () => {
    console.log(this) // { }
}

console.log(es6function())

const person = {
    name : 'arjun',
    skills : ['js','react','node'],
    details :  function(){
        this.skills.forEach(s => console.log(`${this.name} knows ${s}`))
    }
}
console.log(person.details())
// do not make methods to be arrow functions

console.log(this)
const stu = {
    name : 'ravi',
    details : () => {
        console.log(this) // {}
    }
}

console.log(stu.details())