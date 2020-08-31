const name = 'arjun' // global scope

function city(){
    const city = 'banglore'  
    function profession(){
        const prof = 'software developer' // local scope
        console.log(`${name} living in ${city} as a ${prof}`)
    }
    profession()
}
city()