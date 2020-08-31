const numbers = [10,15,20,25]
//c style
function add2(numbers){
    const result = []
    for( let i =0; i < numbers.length; i++){
        result.push(numbers[i]+2)
    }
    return result
}
console.log(add2(numbers))
console.log(numbers)

//js style
function add2Js(numbers){
    const result = numbers.map(function(ele){   // map only works on arrays ,does an operation on each element of the array
        return ele + 2 // returns an array
    })
    return result
}

console.log(add2(numbers)) // [ 12, 17, 22, 27 ]
console.log(numbers)  // [ 10, 15, 20, 25 ]  // no change to original array
