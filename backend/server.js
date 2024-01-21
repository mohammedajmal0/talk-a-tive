const express=require('express');
const dotenv=require('dotenv');
const { chats } = require('./data/data');
dotenv.config();
const app=express()
const port=process.env.PORT
app.listen(port,(console.log(`server started on port ${port}`)));
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/api/chat",(req,res)=>{
    res.send(chats)
})