//-------------VARIABLES------------------------------

//SYSTEM
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

//DATABASE
const express = require('express');

//APP
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require('mongoose');

//ROUTES
const router = express.Router();
const bodyParser = require('body-parser');
//const dbRoutes = require('./routes/log');

//MIDDLEWARE
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

app.get('/', (req,res) => {
    res.send("Hello!");
})  

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use('/logs', dbRoutes);

app.use((err, req, res, next) => {
    if(err.name === "UnauthorizedError") {
        res.status(401).json({error: "Unauthorized!"});
    }

    next();
});

//PORT
const port = process.env.PORT || 8080;


//-------------------------------------------------------


function startAPI() {
    app.listen(port, () => {console.log("Listening on port: " + port)});
}

//CONNECT TO DATABASE
let db;
function connectDB() {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    db = mongoose.connection
    db.on('error', err => {
        console.log('DB Connection Failed: ' + err.message);
    })
    db.once('open', () => {
        console.log('DB Connected.');
    })
}


//initiate backend
function init() {
    connectDB();
    startAPI();
}

init()