const numbers = [10,15,20,25]

// const result = numbers.map(function(ele){
//     return ele+2
// })
// console.log(result)

let result = numbers.map(function(ele){    //always return the ele for both cases in the map or the function will return undefined by default for the check not met
    if(ele % 2== 0){
        return ele+2
    }
 
})

console.log(result)   // [ 12, undefined, 22, undefined ]

result = numbers.map(function(ele) {
  //always return the ele for both cases in the map
  if (ele % 2 == 0) {
    return ele + 2
  } else {
    return ele
  }
});
console.log(result)  // [ 12, 15, 22, 25 ]
