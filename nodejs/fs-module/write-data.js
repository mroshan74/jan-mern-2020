const fs = require('fs')
const data = JSON.stringify([{name:'roshan'},{name:'azim'}])

fs.writeFile('./data2.json',data, () => {
    console.log('written to file')
})