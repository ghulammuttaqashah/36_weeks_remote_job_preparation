const express=require('express')
const app=express()
const path=require('path')
const fs=require('fs')

//parsers
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//to setup the view engine ejs
app.set('view engine','ejs')

//to use the folders for the 
app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){
    fs.readdir('./files',function(err,files){
        res.render("index",{files:files})
        
    })
    
})

app.get('/file/:fileName',function(req,res){
   fs.readFile(`./files/${req.params.fileName}`,'utf-8',function(err,filedata){
        res.render('show',{filename:req.params.fileName, filedata:filedata})
   })
    
})

app.get('/edit/:fileName',function(req,res){
   
    res.render('edit',{filename:req.params.fileName})
})


app.post('/edit/',function(req,res){
   
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,function(err)
    {
        res.redirect('/')
    })
})

app.post('/create',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(" ").join('')}.txt`,req.body.details,function(err){
        res.redirect('/')
    })
})

app.listen(3000)