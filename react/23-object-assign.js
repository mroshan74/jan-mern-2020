const person = {
    name: 'muhammed',
    city: 'bangalore'
}

const assign = {
    name: 'roshan',
    city: 'calicut',
    age: 24
}

Object.assign(person,assign)  // used to append new values, if already exists a property it overrides it, no two same property in single object

console.log(person)  // { name: 'roshan', city: 'calicut', age: 24 }