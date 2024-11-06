const mongoose=require("mongoose");


const userpostScheema= new mongoose.Schema({
    title: {type:String,required:true,unique:true},
    content: {type:String,required:true,unique:true},
    duration: {type:Number,required:true,unique:true},});

    const Postrelation = mongoose.model('UserDataRef', userpostScheema,"UserDataRef");
    module.exports = Postrelation;