const express = require('express');
const path=require('path');
const app=express();

const publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath));
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})
//app.listen(3000,()=>{
 //console.log('servidor corriendo')
//});
const port =process.env.PORT || 3000;
app.listen(port,()=>console.log('Servidor corriendo en el puerto ${port}'));

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})