const express=require("express");

const connectDB=require("./configue/db");

const userRoute=require("./controller/usercontroller");
const branchRoute=require("./controller/brancontroller");
const masterRoute=require("./controller/mastrcontroller");


const app=express();

app.use(express.json())

app.use("/user",userRoute)

app.use("/bank",branchRoute)

app.use("/master",masterRoute)


app.listen(5555,()=>{
    connectDB();
    console.log("listning on 5555")
})