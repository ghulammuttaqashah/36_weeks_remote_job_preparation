
const mongoose=require("mongoose");



const userSchema=mongoose.Schema({
    name:{type:String, required:true,trim:true},
    email:{type:String,required:true,trim:true},
    username:{type:String,required:true,trim:true}
    
},{timestamps:true});


module.exports=mongoose.model('user',userSchema);