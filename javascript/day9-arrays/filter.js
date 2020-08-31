const numbers = [10,20,30,40,50]

// c style
function getElements(numbers){
    const result = []
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 25){
        result.push(numbers[i])
        }
    }
    return result
}
console.log(getElements(numbers))  // [ 30, 40, 50 ]
console.log(getElements([10,100,20,200,30,300]))  // [ 100, 200, 30, 300 ]
console.log(getElements([10,20])) // []

//js style
function getElementsJs(numbers){
    const result = numbers.filter(function(ele){
        return ele > 25
    })
    return result
}
console.log(getElementsJs(numbers));  // [ 30, 40, 50 ]
console.log(getElementsJs([10, 100, 20, 200, 30, 300])); // [ 100, 200, 30, 300 ]
console.log(getElementsJs([10, 20])) // []