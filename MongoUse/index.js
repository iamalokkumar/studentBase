require('dotenv').config();
const express=require("express");
const mongodatabase=require("mongoose");
const userRouter = require('./src/userDataGetFolder/user.allData');


const app=express();
app.use(express.json());
app.use("/user",userRouter);

app.listen(8080,()=>{
  mongodatabase.connect(process.env.MONGODB_URI)
  console.log("started");
})