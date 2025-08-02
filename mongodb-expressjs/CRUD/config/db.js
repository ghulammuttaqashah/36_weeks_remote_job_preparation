const mongoose=require('mongoose');
require('dotenv').config({quiet:true});

const connect=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected");
    }
    catch(e){
        console.log("DB not connected "+e.message);
        process.exit(1);
    }
}

module.exports=connect;