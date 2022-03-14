const express=require("express");
const User=require("../modal/usermodal");




const router=express.Router();


router.post("",async(req,res)=>{

    try{
        const creatuser=await User.create(req.body);
        return res.status(201).send(creatuser)
    }
    catch(e){
        console.log(e)
    }
})



router.get("",async(req,res)=>{

    try{
        const creatuser=await User.find().lean().exec();
        return res.status(201).send(creatuser)
    }
    catch(e){
        console.log(e)
    }
})

module.exports=router;