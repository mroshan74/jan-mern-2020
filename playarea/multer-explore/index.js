const express = require('express')
const app = express()
const port = 3080

app.use(express.json())

const configureDB = require('./config/database')
configureDB()

const routes = require('./config/routes')
app.use('/',routes)

app.listen(port, () => {
    console.log('*** Port opened ',port)
})