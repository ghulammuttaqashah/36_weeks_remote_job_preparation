const express =require('express');
const dbconnect=require('./config/db')
require('dotenv').config({quiet:true})
const userRoutes=require('./routes/userRoutes')

const app=express();
app.use(express.json())

dbconnect()
app.use('/api/users',userRoutes)

let port=process.env.PORT;

app.listen(port,()=>{
    console.log('server running on port '+port)
});
