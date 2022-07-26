var express=require("express");
var app=express();

var onData=function(rq,rs){

var pro=[
  {"id":23,"FirstName":"Rupali", "LastName":"Thorat"}
  {"id":13,"FirstName":"Ajay", "LastName":"Mane"}
  {"id":3,"FirstName":"Riya", "LastName":"Pawar"}
];
rs.send(pro);
 }
 app.get("/api/emp",onData);
app.listen(3000);
console.log("Server listening on 3000 port")
