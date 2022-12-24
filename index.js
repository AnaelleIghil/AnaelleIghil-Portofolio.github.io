const express = require('express');
const path= require('path');
const app= express();
const routes = require('./routes');
const PORT = 3002;

app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, ()=>{
console.log('En écoute de test');
})