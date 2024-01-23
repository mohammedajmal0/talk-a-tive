const mongoose=require('mongoose')

const connectDb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            autoIndex:true,
        });
        console.log('connected to db');
    }
    catch(err){
        console.log(err)
        process.exit();
    }
}

module.exports=connectDb;