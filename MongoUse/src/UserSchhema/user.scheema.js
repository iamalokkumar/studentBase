
const mongoose=require("mongoose");


const userScheema= new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,default:"@gmail.com"},
    gender:{type:String,required:true,enum:["Male","Female"]},
    userRefData: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserDataRef' }] 
},{versionKey:false});

module.exports=userScheema;