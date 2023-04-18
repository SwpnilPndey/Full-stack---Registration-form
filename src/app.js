const express=require("express");
const path=require("path");
const app=express();
const port=process.env.PORT||3001;
require("./db/conn");
const hbs=require("hbs");
const Register=require("./models/registers");


const static_path=path.join(__dirname,"../public");
const views_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

const bcrypt=require("bcryptjs");



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));


app.set("view engine","hbs");
app.set("views",views_path);
hbs.registerPartials(partials_path);



app.get("/",(req,res)=> {
    res.render("index");
})

app.get("/register",(req,res)=> {
    res.render("register");
})

app.post("/register",async(req,res)=> {
    try {
        const register=new Register({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        })

       const registered= await register.save();
       res.status(201).render("main");
        


    } catch (error) {
        res.status(400).send(error);
    }
})

app.get("/login",(req,res)=> {
    res.render("login");
})

app.post("/login",async(req,res)=> {
    try {
        const username=req.body.username;
        const password=req.body.password;
        const userName=await Register.findOne({username:username});

        const isMatch=await bcrypt.compare(password,userName.password);
        if(isMatch) {
            res.status(201).render("main");
        }
        else {
            res.status(400).send("Invalid credentials");
               }
        
 
    } catch (error) {
        res.status(400).send(error);
    }
})



app.listen(port,()=> {
    console.log(`Server running at ${port}`);
}) 