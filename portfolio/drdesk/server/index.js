const express = require('express')
const port = 8088
const app = express()

const configureDB = require('./config/database')
configureDB()

app.use(express.json())

const routes = require('./config/routes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('OPENED PORT AT ----',port)
})