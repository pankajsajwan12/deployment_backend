const {Router} = require("express");
const {IAModel} = require("../Models/IA.model")
const iaRouter = Router()

iaRouter.get("/", async(req,res) => {
    const student_data =await IAModel.find();
    res.send(student_data);
})

// /students
// /studens/


module.exports = {
    iaRouter
}