
const express=require("express");
const mongodatabase=require("mongoose");
const userRouter = require("./userDataGetFolder/user.allData");

const app=express();
app.use(express.json());
app.use("/user",userRouter);
app.listen(8080,()=>{
  mongodatabase.connect("mongodb://127.0.0.1:27017/user")
  console.log("server started at 8080");
})