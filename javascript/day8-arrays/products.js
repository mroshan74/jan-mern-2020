const products = [
{ id : 1, name: 'marker', price: 15},
{ id : 2, name: 'scale' , price: 10},
{ id : 3, name: 'board', price:150}
]// keys are always string, objects are string indexed

// console.log('Listing Products ',products.length)
// for(let i = 0; i < products.length; i++){
//     console.log(`${products[i].id}. ${products[i].name} INR - ${products[i].price}`)
// }

console.log("Listing Products ", products.length)
products.forEach(function(ele){
    console.log(`${ele.id}. ${ele.name} INR - ${ele.price}`)
})
