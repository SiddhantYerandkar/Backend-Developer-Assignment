const userModel = require('../Models/userModel')
const validation = require('../Middleware/validation')
const jwt = require('jsonwebtoken')
const studentModel = require('../Models/studentModel')
const { isValidMobile, isValidName, isValidString, isValidPincode, isValidPassword, isValidAge, isValidAdhaar } = validation

const registerUser = async function (req, res) {
    try {
        let data = req.body
        const { Name, PhoneNumber, password } = data

        if (!Name) return res.status(400).send({ status: false, message: " Name is required " })
        if (!isValidString(Name) && !isValidName(Name)) return res.status(400).send({ status: false, message: "please enter a valid Name" })

        if (!PhoneNumber) return res.status(400).send({ status: false, message: " phoneNumber is required " })
        if (!isValidMobile(PhoneNumber)) return res.status(400).send({ status: false, message: "please enter a valid phoneNumber" })

        if (!password) return res.status(400).send({ status: false, message: "password is mandatory" })
        if (!isValidPassword(password)) return res.status(400).send({ status: false, message: "password must be between 8-15 length" })

        let createData = await userModel.create(data)
        return res.status(201).send({ status: true, message: "Successfully registered", Data: createData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const login = async function (req, res) {
    try {
        let data = req.body

        if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ status: false, message: "email and password is required" })
        }

        const { password, PhoneNumber } = data

        if (!password) return res.status(400).send({ status: false, message: "password required for login" })

        if (!PhoneNumber) return res.status(400).send({ status: false, message: "PhoneNumber required for login" })

        let findData = await userModel.findOne({ password: password, PhoneNumber: PhoneNumber })
        if (Object.keys(findData).length == 0) return res.status(404).send({ status: false, message: "phoneNumber or Password entered is Invalid" })

        let token = jwt.sign({
            userId: findData._id.toString()
        }, "functionup-secret-key", { expiresIn: '30m' });

        res.setHeader("x-api-key", token);

        res.status(200).send({ status: true, message: "Success", data: token });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = { registerUser, login}