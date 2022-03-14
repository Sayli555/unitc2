const express=require("express");
const Branch=require("../modal/bramchdetail");




const router=express.Router();


router.post("/creatBranch",async(req,res)=>{

    try{
        const branch=await Branch.create(req.body);
        return res.status(201).send(branch)
    }
    catch(e){
        console.log(e)
    }
})



router.get("/getbranch",async(req,res)=>{

    try{
        const branch=await Branch.find().lean().exec();
        return res.status(201).send(branch)
    }
    catch(e){
        console.log(e)
    }
})

module.exports=router;