const employee = {
    id : 1,
    name : 'mani',
    gender: 'male'
}

// read properties from an object
console.log(employee.name)  // 'mani'
console.log(employee['name']) // 'mani'
console.log(employee.salary)  // undefined

console.log(employee)
// add property to an object or key : value

// update property
employee.email = 'mani@gmail.com'  // access the property and assign a new value
console.log(employee)

employee['salary'] = 65000
console.log(employee)

// delete property -> only on value at a time
delete employee.gender
console.log(employee)

// all keys
console.log(Object.keys(employee))  // [ 'id', 'name', 'email', 'salary' ]

// all values
console.log(Object.values(employee)) // [ 1, 'mani', 'mani@gmail.com', 65000 ]

// total key value pair
console.log(employee.length)  // undefined
console.log(Object.keys(employee).length)  // 4

// know if a key / prop is present
console.log(employee.hasOwnProperty('salary')) // true
console.log(employee.hasOwnProperty('age')) // false
console.log(Object.keys(employee).includes('age')) // false

// know if a value is present
console.log(Object.values(employee).includes('mani')) // true