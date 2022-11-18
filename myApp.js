let express = require('express');
let app = express();
let fs=require('fs')
console.log("Hello World");
console.log(fs.readdirSync(__dirname));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
})





























 module.exports = app;
