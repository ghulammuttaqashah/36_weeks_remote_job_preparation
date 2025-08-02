const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
require('dotenv').config({quiet:true});

const User =require('../models/User')
const create=async function (req,res){
    try{
        const {email,name,password}=req.body;

        //check if user already exits or not!
        const existingUser=await User.find({email});
        if(!existingUser){
            return res.status(400).json({message:"Email already exists"})
        }

        //hashing 
        const salt=10;
        const hashedPassword=await bcrypt.hash(password,salt);

        //adding the user
        const newUser=await User.create({name,email,password:hashedPassword});
        res.status(201).json({message:"User added successfully",user:{
            name:newUser.name,
            email:newUser.email,
            password:newUser.password,
            _id:newUser._id
        }});
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

const loginUser= async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalid credentials"});
        }

        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'10m'});

        res.cookie('token',token,{
            httpOnly:true,
            secure:false,
            sameSite:"None", //for deplouement
            maxAge:60*60 *1000//60 seconds
        });

        res.status(200).json({message:"login successull",user:{
            userId:user._id,
            
            name:user.name,
            email:user.email
        }})

    }
    catch(e){
        res.status(500).json({message:"server error",error:e.message});
    }
}

const logoutUser = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports={create,find,deleteUser,updateUser,loginUser,logoutUser};