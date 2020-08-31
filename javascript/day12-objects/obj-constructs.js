const fruits = ['apple', 'mango', 'kiwi']

function buildObj(fruits){
    const result = {}
    for (let i = 0; i < fruits.length; i++){
        result[fruits[i]] = fruits[i].length
    }
    return result
}

console.log(buildObj(fruits))  // { apple: 5, mango: 5, kiwi: 4 }