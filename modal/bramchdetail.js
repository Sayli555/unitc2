const mongoose=require("mongoose");

const branchSchema=mongoose.Schema({
    name:{type:String,require:true},
    IFSC:{type:String,require:true},  
    MICR: {type:Number,require:true},
    address :{type:String,require:true}
   

},
{
    timestamps:true,
    versionkey:false

}

)

module.exports=mongoose.model("Branch",branchSchema)
