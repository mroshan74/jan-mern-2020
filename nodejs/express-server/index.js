// npm init
// npm install express
// create index.js

const express = require('express')
const app = express()
const port = 3035

app.use(express.json())

const users = [
    { id: 1, name: 'roshan'},
    { id: 2, name: 'muhammed'},
    { id: 3, name: 'anshib'}
]

// RequestListener / RequestHandler
// httpMethod( url , callback )

app.get('/', (req,res) => {
    res.send('welcome to the website')
})

app.get('/users', (req,res) => {
    res.json(users)
})

app.get('/users/:id', (req,res) => {
    const id = req.params.id
    const user = users.find(user => user.id == id)
    if(user) {
        res.json(user)
    } else {
        res.json({})
    }
})

app.post('/users/register',(req,res) => {
    const body = req.body
    console.log(body)
    res.json(body)
})

app.put('/users/address', (req, res) => {
  res.json({
    notice: 'http method - put, url - /users/address',
  })
})

app.delete('/users/logout', (req, res) => {
  res.json({
    notice: 'http method - delete, url - /users/logout',
  })
})

app.listen(port,()=>{
    console.log('listening to port ',port)
})