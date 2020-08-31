let n1 = 10
let n2 = n1

console.log(n1,n2) // 10 10

n1 = 50
console.log(n1,n2) // 50 10

n2 = 30
console.log(n1,n2) // 50 30

let array1 =  [10,20]  // values are stored in the address location
let array2 =  array1  // the address of the object/array is assigned to the new variable

console.log(array1,array2) // [ 10, 20 ] [ 10, 20 ]
array1.push(30)  //  values in the address is modified
console.log(array1, array2) // [ 10, 20, 30 ] [ 10, 20, 30 ] display values in the address
array2.push(40)  // values in the address is modified
console.log(array1, array2) // [ 10, 20, 30, 40 ] [ 10, 20, 30, 40 ] display values in the address

