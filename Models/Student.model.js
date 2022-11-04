const mongoose = require("mongoose")

const studentShecma = mongoose.Schema({
    name : String,
    age : Number,
    course : String,
 })
 const StudentModel = mongoose.model("student", studentShecma)

 module.exports = {
    StudentModel
 }