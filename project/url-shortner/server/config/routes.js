const express = require('express')
const router = express.Router()

const urlControllers = require('../app/controllers/urlControllers')

router.get('/urls',urlControllers.list)
router.post('/urls',urlControllers.create)
router.get('/urls/:id',urlControllers.show)
router.put('/urls/:id',urlControllers.update)
router.delete('/urls/:id',urlControllers.destroy)

router.get('/:hash',urlControllers.redirect)

module.exports = router