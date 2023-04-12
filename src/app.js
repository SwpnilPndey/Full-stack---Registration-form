const express=require("express");
const path=require("path");
const app=express();
const port=process.env.PORT || 3000;
require("./db/conn");
const hbs=require("hbs");

const static_path=path.join(__dirname,"../public");
const views_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

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
app.get("/login",(req,res)=> {
    res.render("login");
})


app.get("/",(req,res)=>{
    res.send("Hello lets learn full stack development"); 
})

app.listen(port,()=> {
    console.log(`Server running at ${port}`);
}) 