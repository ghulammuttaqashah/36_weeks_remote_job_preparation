const validate = require('../middleware/validate');
const User =require('../models/User')
const create=async function (req,res){
    try{
        const newUser=await User.create(req.body);
        res.status(201).json({message:"User added successfully",user:newUser})
    }
    catch(error){
        
        res.status(500).json({message:"server error",error:error.message});
    }
};

const find=async function (req,res){
        try{
            const users=await User.find();
            if(users.length===0){
                return res.status(404).json({message:"Users not found"})
            }
            res.status(200).json(users)
        }   
        catch(e){
            res.status(500).json({message:"server error", error:e.message});
        }
}

const deleteUser=async function(req,res){
    try{
        const deleted=await User.findByIdAndDelete(req.params.id)
        if(!deleted) return res.status(404).json({message:"User not found"})
        res.status(200).json({message:"User deleted"})
    }
    catch(e){
        res.status(500).json({message:'server error',error:e.message})
    }
}

const updateUser=async function(req,res){
    try{
 const updated=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidors:true});
   if(!updated) return res.status(400).json({message:'user not found'});
    res.status(200).json({message:"user updated successfully"});
    }
    catch(e){
        res.status(500).json({message:"server error",error:e.message})
    }
}
module.exports={create,find,deleteUser,updateUser};