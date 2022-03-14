const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    age:{type:Number,require:true},
    email: {type:String,require:true},
    address :{type:String,require:true}
   

},
{
    timestamps:true,
    versionkey:false

}

)

module.exports=mongoose.model("User",userSchema)

    