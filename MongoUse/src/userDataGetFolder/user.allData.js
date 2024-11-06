
const express=require("express");
const mongoose=require("mongoose");
const userScheema = require("../UserSchhema/user.scheema");
const Postrelation = require("../UserSchhema/user.postscheema");
const userRouter=express.Router();
const getUserData= mongoose.model("userData",userScheema,"userData");
userRouter.get("/",async(req,res)=>{
    const getUser=await getUserData.find();
    res.status(200).json({ data: getUser,"success":true });
});
userRouter.post("/course",async(req,res)=>{
    try{
        const addEntry=await Postrelation.create(req.body);
        res.send(addEntry);
    }
   
    catch(err){
     res.send(err.message);
    }
})
userRouter.post("/",async(req,res)=>{
    try{
        const addEntry=await getUserData.create(req.body);
        res.send(addEntry);
       
    }
   
    catch(err){
     res.send(err.message);
    }
})
userRouter.post('/:id', async (req, res) => {
    try {
      const student = await getUserData.findById(req.params.id);
      const course = await Postrelation.findById(req.body.courseId); // Finds the course by ID in the request body

      if (!student || !course) return res.status(404).send('Student or course not found');
      student.userRefData.push(course);
      await student.save();
    res.json(student)
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
userRouter.delete("/:id",async(req,res)=>{
    try{
        const inputid=req?.params?.id;
    const findUser= await getUserData?.find({id:inputid});
    if(findUser?.length<=0){
        res.status(404).json({message:"User data not found",success:false});
        return;
    }
  
    await getUserData.deleteOne({id:req.params.id});
     res.status(200).json({message:"Removed successfully",success:true,data:findUser})
      
    }
    catch(err){
        res.send(err.message);
    }
})

userRouter.patch("/",async(req,res)=>{
    const findUser= await getUserData?.find({id:req?.body?.id});
     if(findUser?.length<=0){
        res.status(404).json({message:"User data not found",success:false});
        return;
     }
    const updateBody = {
        ...req.body,id:findUser[0]?.id
    }
    await getUserData?.updateOne({id:req?.body?.id},{$set:updateBody});
    res.status(200).json({ data: updateBody,"success":true });
})

module.exports= userRouter;