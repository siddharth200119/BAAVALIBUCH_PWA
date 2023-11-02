var mongoose = require("mongoose")

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
    friendID: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
})

const User = mongoose.model("User", userSchema)

module.exports = User