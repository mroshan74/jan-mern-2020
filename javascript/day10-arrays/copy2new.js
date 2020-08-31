const arr1 = [10,20,30]
const arr2 = arr1.slice(0)  //  elements stored in array with no reference to address
// [].concat(arr1) adds two array, if not used its does the normal adding of strings 10+20 1020
const arr3 = arr1.map(function(ele){ // helps in storing array with no reference to the address
    return ele
})
console.log(arr1,arr2)

arr1.push(40)
console.log(arr1, arr2)

arr2.push(50)
console.log(arr1,arr2)
console.log(arr1, arr3)

