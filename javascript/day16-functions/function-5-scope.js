const city = "bangalore"
// any variable declared outside the function becomes global variable

function showCity() {
    const city ='kozhikode'
    console.log(city)

}
showCity()
console.log(city)
