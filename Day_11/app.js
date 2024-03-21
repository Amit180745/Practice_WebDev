//Basics of using express.JS


const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res)=> {
    res.send('Hello, I am using express.js')
  })
  app.get('/greet',(req, res)=> {
    res.send('Hello,You are in!')
  })
  app.get('/bye',(req, res)=> {
    res.send('Bye - Bye, See you later')
  })

app.listen(port)