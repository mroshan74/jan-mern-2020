const numbers = [10,20,30,40,50]

// indexOf(30) >= 0 || includes(30) ==
// ??

// c styled
function findEle(numbers){
    let result
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 35){
            result = numbers[i]
            break
        }
    }
    return result
}
console.log(findEle(numbers))

// JS styled
function findEleJs(numbers){   // find element works based on condition to first satisfy
    const result = numbers.find(function(ele){
        return ele > 35  // returns undefined if no elements meet the condition
    })
    return result
}
console.log(findEleJs(numbers))