const express=require("express");
const Master=require("../modal/mastraccout");




const router=express.Router();


router.post("/master",async(req,res)=>{

    try{
        const master=await Master.create(req.body);
        return res.status(201).send(master)
    }
    catch(e){
        console.log(e)
    }
})



router.get("/master",async(req,res)=>{

    try{
        const master=await Master.find().lean().exec();
        return res.status(201).send(master)
    }
    catch(e){
        console.log(e)
    }
})

module.exports=router;