const cart = [{ id : 1, name: 'marker', price: 10, quantity: 1}]

function add2Cart(cart,product){
    const item = cart.find(function(lineItem){
        return lineItem.id == product.id
    })
    if(item) // item = find returns undefined(false) if not met condition
            // item = true if find returns the object array
    {
        item.quantity = item.quantity + product.quantity
    }
    else{
        cart.push(product)
    }
    return cart
}
console.log(add2Cart(cart, { id: 2, name: "scale", price: 10, quantity: 1 }))
console.log(add2Cart(cart, { id: 1, name: 'marker', price: 10, quantity: 2 }))