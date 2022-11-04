const express = require("express");
const {connection } = require("./config/db.js");
const {StudentModel} = require("./Models/Student.model")
const {studentRouter} = require("./routes/Student.route")
const {iaRouter} = require("./routes/IA.route")
const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("API Hone Page, Try other routes");
})

app.get("/students", studentRouter)
app.get("/ia",iaRouter)

app.listen(8009, async() => {
    try{
        await connection;
        console.log("App is connect mongooes ");
    }
    catch(err) {
        console.log("App is not coonect with mongooes");
        console.log(err);
    }
    console.log("App is listing 8009 port");
})