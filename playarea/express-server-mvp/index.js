const express = require('express')
const app = express()
const port = 3030

const configureDB = require('./config/database')
configureDB()

app.use(express.json())

const routes = require('./config/routes')
app.use('/', routes)


app.listen(port,()=>{
    console.log('Listening on port',port)
} )