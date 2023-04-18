const mongoose=require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    }).then(()=>{
    console.log("Connection to database is successful");
}).catch((e)=>{
    console.log(e);
})