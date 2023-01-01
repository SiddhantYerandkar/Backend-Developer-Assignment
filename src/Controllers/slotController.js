const slotModel = require('../Models/slotModel')
const userModel = require('../Models/userModel')

const bookSlot = async function (req, res) {
    try {
        let data = req.body
        const { numberOfDose, time, slot } = data

        let findUser = await userModel.findById(userId)
        if (!findUser) return res.status(404).send({ status: false, message: "user not found" })

        let availability = await slotModel.findOne({ slot: slot, time: time })

        if (availability.numberOfDose > 10) return res.status.send({ status: false, message: "This time slot is full" })

        return res.status(200).send({ status: true, message: "Booked for this time slot" })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.bookSlot = bookSlot