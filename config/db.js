const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://pankajsajwan12:pankajsajwan@cluster0.jlwecry.mongodb.net/?retryWrites=true&w=majority");


 module.exports = { 
    connection,   
}