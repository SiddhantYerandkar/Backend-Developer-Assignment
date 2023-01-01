const express = require('express')
const slotController = require('../Controllers/slotController')
const userController = require('../Controllers/userController')

const router = express.Router()

router.post('/register', userController.registerUser)

router.post('/login', userController.login)

router.get('/getDetails/:userId', userController.getUserDetails)

router.get('/getDetails', userController.getDetailsByFilter)

router.post('/bookSlot', slotController.bookSlot)

module.exports = router