const express = require('express')
const fs = require('fs')
const port = 3050

const app = express()
app.use(express.json())

app.get('/products',(req,res) => {
    fs.readFile('./data.json', (err,data) =>{
        if(err){
            console.log(err)
        }
        const products = JSON.parse(data)
        res.json(products)
    })
})

app.post('/products',(req,res) => {
    const body = req.body
    fs.readFile('./data.json', (err,data) => {
        if(err) {
            res.json(err)
        }
        const products = JSON.parse(data)
        products.push(body)
        fs.writeFile('./data.json', JSON.stringify(products), () => {
            res.json({
                notice: 'successfully added product'
            })
        })
    })
})

app.get('/products/:id',(req,res) => {
    const id = req.params.id
    fs.readFile('./data.json',(err,data) => {
        if(err) {
            res.json(err)
        }
        const products = JSON.parse(data)
        const product = products.find(product => product.id == id)
        if(product) {
            res.json(product)
        } else {
            res.json({})
        }
    })
})

app.delete('/products/:id',(req,res) =>{
    fs.readFile('./data.json',(err,data) => {
        if(err){
            console.log(err)
        }
        const products = JSON.parse(data)
        const afterDelete = products.filter(product => product.id != req.params.id)
        fs.writeFile('./data.json', JSON.stringify(afterDelete), () => {
            res.json({notice:'successfully deleted'})
        })
    })
})

app.listen(port, () =>{
    console.log('Listening to port', port)
})