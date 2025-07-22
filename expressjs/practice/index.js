const express=require('express')
const app=express()
const path=require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){
    res.render('index',{
        number1:4,
        number2: 2
    })
})

app.get('/profile/:username',function(req,res){
    
    res.send("Pofile person name is : "+req.params.username)
})

app.get('/author/:username/:id',function(req,res){
    
    res.send(req.params)
})

app.listen(3000,()=>{console.log('running ')})