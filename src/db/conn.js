const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Registration",{
    useNewUrlParser:true,
    }).then(()=>{
    console.log("Connection to database is successful");
}).catch((e)=>{
    console.log(e);
})