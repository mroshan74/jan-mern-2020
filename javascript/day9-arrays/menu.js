const menuItems = [
    { id : 1, name : 'chilly chicken', isVeg : false },
    { id : 2, name : 'paneer chilly', isVeg : true },
    { id : 3, name : 'veg biriyani', isVeg : true },
    { id : 4, name : 'mutton biriyani', isVeg : false }
]

function isVeg(menuItems){  // argument passed here is a object ->properties 3
    const result = menuItems.filter(function(items){
        return items.isVeg == true
    })
    return result
}

console.log(isVeg(menuItems)) // [ { id: 2, name: 'paneer chilly', isVeg: true }, { id: 3, name: 'veg biriyani', isVeg: true }]
