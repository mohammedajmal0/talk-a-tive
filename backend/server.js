const express=require('express');
const dotenv=require('dotenv');
const { chats } = require('./data/data');
const connectDb = require('./config/db');
const {notFound,errorHandler} = require('./middlewares/errorMiddleware')
const color=require('colors')
const userRoutes=require('./routes/userRoutes');
dotenv.config();
connectDb();
const app=express()
app.use(express.json()) // to accept json data
const port=process.env.PORT
app.listen(port,(console.log(`server started on port ${port}`)));
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/api/chat",(req,res)=>{
    res.send(chats)
})

app.use(notFound);
app.use(errorHandler)
app.use('/api/user',userRoutes);