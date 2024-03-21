//Basics of using express.JS

const express = require('express')
const path = require('path');
const app = express()
const PORT = 3000;

app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
    res.send("Hello, How are you?");
})

app.get('/greetings',(req,res)=>{
    res.send("<h1 style='background-color: purple; color: red'>Hey, Good Day! Sir</h1>")
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/greet/:name',(req,res)=>{
    console.log(req.params);
    res.send(`Aur, Kyaa Haal Chaal Hai? ${req.params.name}`);
})

// Query parameters req: '/bye?name=aman&city=delhi
app.get('/bye',(req,res)=>{
    res.send(`Aur, Chalo Milte hai baad mei? ${req.query.name} from ${req.query.city}`);
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});