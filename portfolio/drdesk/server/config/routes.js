const express = require('express')
const router = express.Router()

const userControllers = require('../app/controllers/userControllers')

router.post('/user/register',userControllers.register)
router.post('/user/login',userControllers.login)

module.exports = router