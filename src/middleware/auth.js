const jwt=require("jsonwebtoken");
require("dotenv").config();
const Register=require("../models/registers");


const auth =async (req,res,next)=> {
    try {
        const token=req.cookies.jwt;
        const verifyUser=jwt.verify(token,process.env.SECRET_KEY);
        next();

    } catch (error) {
        res.status(400).send(error);        
    }
}

module.exports=auth;