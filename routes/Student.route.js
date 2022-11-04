const {Router} = require("express");
const {StudentModel} = require("../Models/Student.model")
const studentRouter = Router()

studentRouter.get("/", async(req,res) => {
    const student_data =await StudentModel.find();
    res.send(student_data);
})


studentRouter.get("/:studentname", async(req,res) => {
    const student_data =await StudentModel.find({name : req.params.studentname});
    res.send(student_data);
})




studentRouter.post("/addStudent" ,async(req,res) => {
    const payload = req.body;
    if(payload.course === "NEM-111"){
        //write your logic
        await StudentModel.insertMany([payload])
        res.send("Student data is successufully add");
    } else {
        res.send("Please enter a valid course")
    }
})

module.exports = {
    studentRouter
}