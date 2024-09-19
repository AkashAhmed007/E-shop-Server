const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 5000;

app.use(cors({
    origin:'http://localhost:5173/',
    methods:['GET','POST','DELETE','PUT'],
    allowedHeaders:[
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    credentials: true
}));

app.use(cookieParser())
app.use(express.json())

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vdmac.mongodb.net/`
  )
  .then(() => console.log("Mongodb is connected"))
  .catch((err) => console.log(err));

app.listen(port,()=>console.log(`Server is running now on port ${port}`))