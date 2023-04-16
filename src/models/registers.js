const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");

const dataSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})


dataSchema.pre("save",async function(next) {
    if(this.isModified("password")) {
    this.password=await bcrypt.hash(this.password,10);
    }
    next();
})

const Register=new mongoose.model("Register",dataSchema);

module.exports=Register;