const mongoose=require("mongoose");

const mastrSchema=mongoose.Schema({
    balance:{type:Number,require:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",require:true},
    managerId:{type:mongoose.Schema.Types.ObjectId,ref:"User",require:true},
    branchId:{type:mongoose.Schema.Types.ObjectId,ref:"Branch",require:true},


},
{
    timestamps:true,
    versionkey:false

}

)

module.exports=mongoose.model("Master",mastrSchema)
