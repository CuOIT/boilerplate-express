let express = require('express');
let app = express();
console.log("Hello World");
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})





























 module.exports = app;
