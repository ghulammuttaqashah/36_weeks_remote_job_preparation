const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{type:String, required:true,trim:true},
    email:{type:String,required:true,trim:true,unique:true},
    password:{type:String,required:true,trim:true}
    //the timestamps will provide the basic info such created at and updated
},{timestamps:true});


module.exports=mongoose.model('user',userSchema);