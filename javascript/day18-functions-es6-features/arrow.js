// es6 - arrow functions
// only with function expressions & anonymous functions

// es5 function expression
const sum1 = function(n1,n2){
    return n1 + n2
}

// es6 function expression with arrow function
const sum2 = (n1,n2) => {
    return n1 + n2
}
console.log(sum2(10,20))

const numbers = [10,15,20,25,30]
// filter with es5 function
const result = numbers.filter(function(ele){
    return ele % 2 == 0
})
console.log(result)

// filter with es6 arrow function 
const result1 = numbers.filter((ele) => {
    return ele % 2 == 0
})
console.log(result1)

// filter with es6 arrow function
// if only 1 arg passed - () is optional
// if there is only 1 statement to be executed { } is optional, return key is optional & the statement to be written next to =>

const result2 = numbers.filter(ele => ele % 2 == 0)

console.log(numbers.filter(ele => ele % 2 == 0))

numbers.forEach((ele,i) => console.log(i,ele))