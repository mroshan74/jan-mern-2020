const menuItems = [
  { id: 1, name: "chilly chicken", isVeg: false },
  { id: 2, name: "paneer chilly", isVeg: true },
  { id: 3, name: "veg biriyani", isVeg: true },
  { id: 4, name: "mutton biriyani", isVeg: false }
]

function search(menuItems,term){
    const result = menuItems.filter(function(item){
        return item.name.includes(term)
    })
    if( result.length == 0){
        return 'No results found, find a new keyword'
    } else{
    return result
    }
}

console.log(search(menuItems,'biriyani')) //[ { id: 3, name: 'veg biriyani', isVeg: true }, { id: 4, name: 'mutton biriyani', isVeg: false } ]
console.log(search(menuItems,'riya')) //[ { id: 3, name: 'veg biriyani', isVeg: true }, { id: 4, name: 'mutton biriyani', isVeg: false } ]
console.log(search(menuItems,'biscu')) // No results found, find a new keyword

