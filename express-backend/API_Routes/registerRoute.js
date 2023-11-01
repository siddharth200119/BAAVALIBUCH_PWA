var express = require("express")
var mongoose = require("mongoose")
const app = express.Router()

const userSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String
    },
    friendID: {
        type: String
    }
})

const user = mongoose.model("User", userSchema)

app.post("/register", function(req, res){
    res.send(req.body)
    console.log(req.body)
})

module.exports = app;