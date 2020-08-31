function add(n1,n2){
console.log(n1,n2)
return n1 + n2
}

// if we pass less arguments, parameters will hold undefined
 console.log(add()) //  NaN   -> a,b -> undefined,undefined  -> returns NaN because of the operation
 console.log(add(10)) //  NaN -> a,b -> 10  undefined

// when we pass more arguments, extra arguments are just ignored
// 3 rd argument is ignored
console.log(add(20,30,50)) //  50 -> 20 30