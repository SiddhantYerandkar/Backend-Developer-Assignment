const express = require('express')
const userController = require('../Controllers/userController')
const studentController = require('../Controllers/studentController')

const router = express.Router()

router.post('/register', userController.registerUser)

router.post('/login', userController.login)

router.get('/addStudent', studentController.addStudent)

router.post('/updateStudent', studentController.updateStudent)

router.get('/getStudentDetails', studentController.getStudentDetails)

router.delete('/deleteStudent', studentController.deleteStudent)

module.exports = router