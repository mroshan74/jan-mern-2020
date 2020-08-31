const express = require('express')
const router = express.Router()

const usersController = require('../app/controllers/usersController')
const employeesController = require('../app/controllers/employeesController')

router.get('/users',usersController.list)
router.post('/users',usersController.create)
router.get('/user/:id',usersController.show)
router.put('/user/:id',usersController.update)
router.delete('/user/:id',usersController.destroy)

router.get('/employees',employeesController.list)
router.post('/employees',employeesController.create)

module.exports = router