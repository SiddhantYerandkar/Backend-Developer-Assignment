const express = require('express');
const mongoose = require('mongoose');
const app = express()
const router = require('./routes/route.js')

app.use(express.json())

mongoose.connect("mongodb+srv://InternetThug:Siddhant123@cluster0.t0cdfcj.mongodb.net/student-marks",
    { useNewUrlParser: true })
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err))

app.use("/", router)

app.listen(process.env.PORT || 3000, function () {
    console.log("App running on port : " + (process.env.PORT || 3000));
})