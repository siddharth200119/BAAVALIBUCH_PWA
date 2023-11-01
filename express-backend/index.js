var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var fs = require("fs")
const cors = require('cors');
var path = require("path")
var multer = require("multer")
var User = require("./mongoose models/User.js")
require("dotenv").config();

//creating server
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3001' }));

//connecting to database
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to database"))

//multer

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directory to store uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const upload = multer({ storage: storage });

//start the app on port
let port = process.env.PORT;

app.listen(port, function (){
    console.log("server started on port", port);
})

app.get("/", function(req, res){
    res.send("welcome to the PWA");
})

//-------------------------------------------- API --------------------------------------------

app.post("/api/register", upload.single('image'), function(req, res){
    res.send(req.body.pass)
    console.log(req.body.pass)
    const newUser = new User({
      ID: req.body.ID, 
      pass: req.body.pass, 
      friendID: req.body.friendID,
      image: {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/png'
      }
    })
    newUser.save()
})