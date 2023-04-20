const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
require("dotenv").config();

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
    },
    tokens:[{
        token:{
            type:String,
            required:true,
        }
    }]
})

dataSchema.methods.generateToken=async function() {
    try {
        const token=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;

    } catch (error) {
        res.send(error);        
    }
}

dataSchema.pre("save",async function(next) {
    if(this.isModified("password")) {
    this.password=await bcrypt.hash(this.password,10);
    }
    next();
})

const Register=new mongoose.model("Register",dataSchema);

module.exports=Register;