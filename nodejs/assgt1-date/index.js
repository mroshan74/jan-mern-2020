const express = require('express')
const moment = require('moment')

const app = express()

app.use(express.json())

const port = 3040

app.get('/date/:day', (req,res) =>{
    const type = req.params.day
    switch(type){
        case 'today': {
            return res.json({ date: moment().format('LL') })
        }
        case 'yesterday': {
            return res.json({ date: moment().subtract(1,'day').format('LL') })
        }
        case 'tomorrow': {
            return res.json({ date: moment().add(1,'day').format('LL') })
        }
        case 'future': {
            const plusDays = req.query.days
            return res.json({ date: moment().add(plusDays, 'day').format('LL') })
        }
        default: {
            return res.json({ date: moment().format() })
        }
    }
})

app.get('/date/today/day',(req,res) => {
    res.json({ date: moment().format('dddd') })
})

app.listen(port,()=>{
    console.log('listening to port ', port)
})