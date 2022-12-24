const express = require('express');
const path= require('path');
const app= express();
const routes = require('./routes');

app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public')));

