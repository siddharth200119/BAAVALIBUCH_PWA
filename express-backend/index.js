var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var fs = require("fs")
var path = require("path")
var multer = require("multer")
require("dotenv").config();

//creating server
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

//connecting to database
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to database"))

//start the app on port
let port = process.env.PORT;

app.listen(port, function (){
    console.log("server started on port", port);
})

app.get("/", function(req, res){
    res.send("welcome to the PWA");
})

//-------------------------------------------- API --------------------------------------------
