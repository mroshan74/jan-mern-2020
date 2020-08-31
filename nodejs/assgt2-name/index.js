const express = require('express')
const app = express()
const port = 3030

app.use(express.json())

const names = ['john', 'andrew', 'zeus', 'donna', 'emma']

app.get('/names',(req,res)=>{
    const type = req.query.sort
    switch(type){
        case 'asc':{
            return res.json(names.slice(0).sort())
        }
        case 'desc':{
            return res.json(names.slice(0).sort().reverse())
        }
        default:{
            return res.json({names})
        }
    }
})

app.listen(port, () => {
    console.log('Listening to port ',port)
})