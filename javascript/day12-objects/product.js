// const product = [1, 'marker' , 25 ,4.5 ,'white board marker']
const product = {
    // key : value
    // property : value
    id : 1,
    name : 'marker',
    price : 25,
    rating: 4.5,
    description : 'white board marker'
}
console.log(product.name)  // 'marker'
console.log(product.price) // 25

console.log(product['name']) // 'marker'
console.log(product.reviews) // undefined -> typeof undefined = 'undefined'
