var express=require("express");
var app = express();
var bodyParser=require("body-parser");

 
 //add middleware
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));


 app.listen(7000);
 console.log("Producthub service listening on port 7000");
 
