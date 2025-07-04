const express=require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("chamion")
})

app.get('/profile',(req,res)=>{
    res.send("champion coach")
})

app.listen(3000)