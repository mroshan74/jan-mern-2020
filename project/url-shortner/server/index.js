const express = require('express')
const app = express()
const port = 3031

var cors = require('cors')
app.use(cors())

const useragent = require('express-useragent')
app.use(useragent.express())

const requestIp = require('request-ip')
app.use(requestIp.mw())

const configureDB = require('../server/config/database')
configureDB()

app.use(express.json())

const routes = require('../server/config/routes')
app.use('/',routes)

app.listen(port, () => {
    console.log('*** opened port on', port)
})