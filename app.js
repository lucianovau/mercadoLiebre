const express = require('express')
const app = express()
const path = require('path')

app.listen(3000, () => {
     console.log('servidor corriendo')});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.get('/registro', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
})
app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
})
app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.use(express.static('public'));