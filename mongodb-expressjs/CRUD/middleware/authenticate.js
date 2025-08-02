const jwt=require('jsonwebtoken');
require('dotenv').config({quiet:true});
const authenticate=(req,res,next)=>
    {
        const token=req.cookies.token;
         if (!token){
            return res.status(401).json({messgae:'access denied, no token'});
         }

         const JWT_SECRET_KEY=process.env.JWT_SECRET_KEY;
         try{
            const decoded=jwt.verify(token,JWT_SECRET_KEY);
            req.user=decoded;
            next();
         }
         catch(e){
            return res.status(403).json({messgae:"Expired or Invalid token"});
         }
    }
    module.exports={authenticate};