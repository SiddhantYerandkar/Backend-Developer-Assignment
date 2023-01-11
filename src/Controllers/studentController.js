const studentModel = require("../Models/studentModel")

const addStudent = async function (req, res) {
    try {
        let body = req.body

        const { Name, Subject, Marks } = body

        if (!Name) return res.status(400).send({ status: false, message: " Name is required " })
        if (!isValidString(Name) && !isValidName(Name)) return res.status(400).send({ status: false, message: "please enter a valid Name" })

        if (!Subject) return res.status(400).send({ status: false, message: " Subject is required " })
        if (!isValidString(Subject) && !isValidName(Subject)) return res.status(400).send({ status: false, message: "please enter a valid Subject name" })

        if (!Marks) return res.status(400).send({ status: false, message: " Marks is required " })

        let findStudent = await studentModel.findOne({ Name: Name })

        if (Object.keys(findStudent).length !== 0) {
            let updateMarks = findStudent.Marks + Marks

            let findData = await studentModel.findOneAndUpdate({ Name: Name }, { $set: { Marks: updateMarks } }, { new: true })

            return res.status(200).send({ status: true, message: "Success", data: findData })
        }

        let createData = await studentModel.create(body)

        res.status(201).send({ status: true, message: "Success", data: createData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const updateStudent = async function (req, res) {
    try {
        let body = req.body

        const { Name, Subject, Marks } = body

        if (!Name) return res.status(400).send({ status: false, message: " Name is required " })
        if (!isValidString(Name) && !isValidName(Name)) return res.status(400).send({ status: false, message: "please enter a valid Name" })

        if (!Subject) return res.status(400).send({ status: false, message: " Subject is required " })
        if (!isValidString(Subject) && !isValidName(Subject)) return res.status(400).send({ status: false, message: "please enter a valid Subject name" })

        if (!Marks) return res.status(400).send({ status: false, message: " Marks is required " })

        let Data = await studentModel.find({ isDeleted: false }, { $set: { Name: Name, Marks: Marks, Subject: Subject } }, { new: true })

        res.status(200).send({ status: true, message: "Success", data: Data })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


const getStudentDetails = async function (req, res) {
    try {
        let query = req.query

        let Data = await studentModel.find({ isDeleted: false }, query)

        res.status(200).send({ status: true, message: "Success", data: Data })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const deleteStudent = async function (req, res) {
    try {
        let Name = req.body.Name

        if (!Name) return res.status(400).send({ status: false, message: " Name is required " })
        if (!isValidString(Name) && !isValidName(Name)) return res.status(400).send({ status: false, message: "please enter a valid Name" })

        let Data = await studentModel.find({ Name: Name, isDeleted: false }, { $set: { isDeleted: true } })

        res.status(200).send({ status: true, message: "Success", message: "deleted successfully" })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { deleteStudent, addStudent, getStudentDetails, updateStudent }
