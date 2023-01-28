
const fs = require("fs");
const express=require('express');
const app=express();
fs.writeFile("index.html", "<h1>Hello world</h1> <p> this is Abhinav...</p> ", (err) => {
    console.log(err);
})
 app.get('/',function(req,res){
    res.status(200).sendFile("D:\\nodejs_assignment\\assignment-3\\index.html",(err)=>
    {
        console.log(err);
    })
 })



app.listen(5000, () => console.log("Srver is up at port no 5000"));