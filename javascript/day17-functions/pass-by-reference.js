// all objects are pass by reference

const person = {
    name : 'muhammed' ,
    city : 'bangalore'
}

function changeInfo(info){
    console.log(person) // { name: 'muhammed', city: 'bangalore' }
    info.city = 'kozhikode'
    console.log(person) // { name: 'muhammed', city: 'kozhikode' }
    return info
}
console.log(person) //{ name: 'muhammed', city: 'bangalore' }
console.log(changeInfo(person)) // { name: 'muhammed', city: 'kozhikode' }
console.log(person) // { name: 'muhammed', city: 'kozhikode' }
