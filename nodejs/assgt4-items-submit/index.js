const express = require('express')
const port = 3050

const app = express()
app.use(express.json())

app.post('/submit',(req,res) => {
    const items= req.body.items.length
    res.json({total_items: items})
})

app.post('/register',(req,res) => {
    const items = Object.keys(req.body).length
    res.json({total_fields:items})
})

app.listen(port, ()=>{
    console.log('Listening to port', port)
})