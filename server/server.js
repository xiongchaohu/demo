/**
 * Created by hxc on 16-8-4.
 */
const express=require('express');
const bodyParser=require('body-parser');

var app=express();

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

app.get('/query',function (req,res) {
    res.send(req.query);
});

app.listen(3000,function(){
    console.log('example app Listening on port 3000!');
});

module.exports=app;