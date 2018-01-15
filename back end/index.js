var app = require('./config/custom-express')();


var express = require('express');
app.use(express.static('public'));


app.listen(3000, function(){ 
    console.log('Listening...');
 });