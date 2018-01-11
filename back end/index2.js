
var express = require('express');
 
const PORT = 8080;
 
var app = express();
 
app.listen(PORT, function(){
    console.log("My http server listening on port " + PORT + "...");
});
 
app.get('/foo', function(req, res){
    console.log('Hello, I am foo.');
});