const mongoose = require("mongoose");

const iaSchema = new mongoose.Schema({
     name : String,
     role : String,
     age : Number,
})

const IAModal = mongoose.model("ia", iaSchema)

module.exports = {
    IAModal
}