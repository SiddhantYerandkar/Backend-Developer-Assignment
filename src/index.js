const express = require('express');
const mongoose = require('mongoose');
const app = express()
const route = require('./routes/route.js')

app.use(express.json())

mongoose.connect("mongodb+srv://InternetThug:Siddhant123@cluster0.t0cdfcj.mongodb.net/vaccine-register",
    { useNewUrlParser: true })
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err))

app.use("/", route)

app.listen(process.env.PORT || 3000, function () {
    console.log("App running on port : " + (process.env.PORT || 3000));
})