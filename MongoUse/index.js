require('dotenv').config();
const cors = require('cors');

const express=require("express");
const mongodatabase=require("mongoose");
const userRouter = require('./src/userDataGetFolder/user.allData');


const app=express();
app.use(cors());
const cors = require('cors');
app.use(cors({
  origin: 'https://mongopratice.onrender.com',  // Replace with your frontend's actual domain
  methods: ['GET', 'POST'],  // Allow GET and POST methods from the frontend
  credentials: true,         // Allow cookies to be sent
}));

app.use(express.json());
app.use("/user",userRouter);

app.listen(8080,()=>{
  mongodatabase.connect(process.env.MONGODB_URI)
  console.log("started");
})