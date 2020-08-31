const numbers = [10,20,30,40,50]

// map over numbers return [15,25,35,45,55]

// es5 function
const mapEs5 = numbers.map(function(ele){
    return ele+5
})
console.log(mapEs5)

// es6 arrow function
const mapEs6 = numbers.map(ele => ele+5)
console.log(mapEs6)