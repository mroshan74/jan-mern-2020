console.log('1')
setTimeout(() =>{  // sent to background for processing
    console.log('2')
    setTimeout(()=>{
        console.log('4') // delayed
    },100)
    console.log('5')
},200)
console.log('3')

// 1
// 3
// 2
// 5
// 4