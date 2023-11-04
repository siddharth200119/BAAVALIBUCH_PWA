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

app.post("/api/register", upload.single('image'), async function(req, res){

    const friend = await User.findOne({ID: req.body.friendID}).exec()
    var friendIDs = []
    if(friend != null){
      friendIDs = [friend._id]
    }
    const newUser = new User({
      ID: req.body.ID, 
      pass: req.body.pass, 
      friendID: friendIDs,
      image: {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/png'
      }
    })

    try{
      savedUser = await newUser.save()
      if(friend != null){
        const updatedFriend = await User.updateOne({_id: friend._id}, {$push: {friendID: savedUser._id}})
      }   
      res.status(200).json(savedUser)
    } catch(err){
      res.status(500).json({error: err})
    }
      
})

app.post("/api/login", async function(req, res){
  const ID = req.body.ID
  const pass = req.body.pass

  const user = await User.findOne({ID: req.body.ID}).exec()
  if(user != null){
    if(user.pass == pass){
      res.send(user)
    }
    else{
      res.send({"message": "incorrect password"})
    }
  }
  else{
    res.send({"message": "incorrect user name"})
  }
})

app.get("/api/userinfo/:userID", async function(req, res){
  const userID = req.params.userID
  const user = await User.findById(userID).exec()
  if(user != null){
    res.send(user)
  }else{
    res.send({"message": "user not found"})
  }
})